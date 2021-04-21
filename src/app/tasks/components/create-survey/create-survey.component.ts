import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  public newSurveyForm: FormGroup;
  @Output() createSurvey: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.createForm()
    console.log(this.surveryQuestions.controls);

  }

  createForm() {
    this.newSurveyForm = this.fb.group({
      questions: this.fb.array([this.newOptionsQuestion()])
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

  newOptionsQuestion(): FormGroup {
    return this.fb.group({
      question: ["", [Validators.required]],
      options: ["", [Validators.required]],
      multipleChoice: [false, [Validators.required]],
    });
  }

  newLikertScaleQuestion(): FormGroup {
    return this.fb.group({
      question: ["", [Validators.required]],
      tags: ["", [Validators.required]]
    });
  }

  onSubmit() {
    if (!this.newSurveyForm.valid) return;

    const questions = this.newSurveyForm.value.questions
    this.createSurvey.emit(questions)
  }

  get surveryQuestions() {
    return this.newSurveyForm.get('questions') as FormArray;
  }
}
