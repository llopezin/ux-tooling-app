import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/campaign/models/task.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-complete-survey',
  templateUrl: './complete-survey.component.html',
  styleUrls: ['./complete-survey.component.css']
})
export class CompleteSurveyComponent implements OnInit {

  public completedTaskForm: FormGroup
  @Input() task: Task

  constructor(private fb: FormBuilder) { }

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

  createOptionsFormGroup({options}){
    let formGroup = {}

    options.split(',').forEach((option, i) => {
      formGroup[i] = [""]
    });

    return this.fb.group(formGroup)
  }


  onSubmit() {
    const responses = this.completedTaskForm.value
    for (let value in responses){
      if(typeof value === "string") return
      
    }
  }

}
