import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/campaign/models/task.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompleteTaskService } from '../../services/complete-task.service';


@Component({
  selector: 'app-complete-survey',
  templateUrl: './complete-survey.component.html',
  styleUrls: ['./complete-survey.component.css']
})
export class CompleteSurveyComponent implements OnInit {

  public completedTaskForm: FormGroup
  @Input() task: Task

  constructor(private fb: FormBuilder, private completeTaskService: CompleteTaskService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.completedTaskForm = this.fb.group(this.createGroup());
  }

  createGroup() {
    let formGroup = {}

    this.task.questions.forEach((question, i) => {
      question.multipleChoice
        ? formGroup[`question${i + 1}`] = this.createOptionsFormGroup(question)
        : formGroup[`question${i + 1}`] = ["", [Validators.required]]
    });

    return formGroup;

  }

  createOptionsFormGroup({ options }) {
    let formGroup = {}

    options.split(',').forEach((option, i) => {
      formGroup[i] = [""]
    });

    return this.fb.group(formGroup)
  }


  onSubmit() {
    const response = this.completedTaskForm.value;
    const questions = this.task.questions;

    for (let value in response) {
      let questionIndex = parseFloat(value.replace(/[a-z]/g, '')) - 1

      if (typeof response[value] === "object") {
        let optionsArr = questions[questionIndex].options.split(',')
        let checkedBoxesValues = optionsArr.filter((option, i) => { return response[value][i] ? option : false })
        
        response[value] = checkedBoxesValues
      }

      const questionText = questions[questionIndex].question
      response[questionText] = response[value]

      delete response[value]
    }

    this.completeTaskService.postResponse(this.task._id, response).subscribe(res=>console.log(res))
    console.log(response);

  }

}
