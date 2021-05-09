import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/campaign/models/task.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompleteTaskService } from '../../services/complete-task.service';
import { CompletedTaskUserStoreService } from 'src/app/shared/services/completed-task-user-store.service copy';


@Component({
  selector: 'app-complete-survey',
  templateUrl: './complete-survey.component.html',
  styleUrls: ['./complete-survey.component.css']
})
export class CompleteSurveyComponent implements OnInit {

  public completedTaskForm: FormGroup
  public taskCompleted: Boolean
  public taskPosting: Boolean
  @Input() task: Task

  constructor(private fb: FormBuilder, private completeTaskService: CompleteTaskService, private completedTaskStore: CompletedTaskUserStoreService) { }

  ngOnInit(): void {
    this.createForm()
    if(this.completedTaskStore.completed.includes(this.task._id))this.taskCompleted = true 
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

    if(!this.completedTaskForm.valid)return

    this.taskPosting = true

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

    this.completeTaskService.postResponse(this.task._id, response).subscribe(res => {
      this.taskCompleted = true
      this.completedTaskStore.completeTask(this.task._id)
    })

  }

}
