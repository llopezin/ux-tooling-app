import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Task } from 'src/app/campaign/models/task.model';

@Component({
  selector: 'app-update-survey',
  templateUrl: './update-survey.component.html',
  styleUrls: ['./update-survey.component.css']
})
export class UpdateSurveyComponent implements OnInit {

  public newSurveyForm: FormGroup;
  @Output() updateSurvey: EventEmitter<any> = new EventEmitter();
  @Input() task: Task

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.updateForm()
  }

  updateForm() {
    this.newSurveyForm = this.fb.group({
      questions: this.fb.array(this.currentQuestions())
    }
    );
  }

  addQuestion(type) {
    switch (type) {
      case 'options':
        this.surveryQuestions.push(this.newOptionsQuestion())
        break;

      case 'likert':
        this.surveryQuestions.push(this.newLikertScaleQuestion())
        break;
    }
  }

  deleteQuestion(i) {
    this.surveryQuestions.removeAt(i)
  }

  currentQuestions() {

    return this.task.questions.map(({ question, type, options, multipleChoice }) => {

      return this.fb.group({
        question: [question, [Validators.required]],
        type: [type],
        options: [options, [Validators.required]],
        multipleChoice: [multipleChoice],

      })

    })

  }

  newOptionsQuestion(): FormGroup {
    return this.fb.group({
      question: ["", [Validators.required]],
      type: ["options"],
      options: ["", [Validators.required]],
      multipleChoice: [false],
    });
  }

  newLikertScaleQuestion(): FormGroup {
    return this.fb.group({
      question: ["", [Validators.required]],
      type: ["likert"],
      tags: ["", [Validators.required]]
    });
  }

  onSubmit() {
    if (!this.newSurveyForm.valid) return
    this.updateSurvey.emit(this.newSurveyForm.value)
  }

  get surveryQuestions() {
    return this.newSurveyForm.get('questions') as FormArray;
  }
}
