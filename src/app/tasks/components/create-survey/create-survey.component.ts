import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.createForm()
    console.log(this.surveryQuestions.controls);
    
  }

  createForm() {
    this.newSurveyForm = this.fb.group({
      questions: this.fb.array([this.newQuestion()])
    }
    );
  }

  addQuestion(){
    this.surveryQuestions.push(this.newQuestion())
  }

  deleteQuestion(i){
    this.surveryQuestions.removeAt(i)
  }

  newQuestion(): FormGroup {
    return this.fb.group({
      question: ["", [Validators.required]],
      type: ['Question', [Validators.required]],
    });
  }

  onSubmit() {
    if (!this.newSurveyForm.valid) return;
    const { question, type } = this.newSurveyForm.value;
    console.log('newSurveyForm.value:', this.newSurveyForm.value)

    //dispatch action
  }

  get surveryQuestions() {
    return this.newSurveyForm.get('questions') as FormArray;
  }
}
