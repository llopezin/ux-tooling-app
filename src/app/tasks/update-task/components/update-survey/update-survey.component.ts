import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-update-survey',
  templateUrl: './update-survey.component.html',
  styleUrls: ['./update-survey.component.css']
})
export class UpdateSurveyComponent implements OnInit {
  public newSurveyForm: FormGroup;
  @Output() updateSurvey: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.updateForm()
    console.log(this.surveryQuestions.controls);

  }

  updateForm() {
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
