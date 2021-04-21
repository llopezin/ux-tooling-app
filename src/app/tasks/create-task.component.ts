import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/app.reducers';
import {createCampaign} from 'src/app/shared/store/workspace-store/workspace.actions';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  public newTaskForm: FormGroup;
  public type: FormControl;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.type = new FormControl('Survey', [Validators.required]);
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm() {
    this.newTaskForm = this.fb.group({
      name: ["", [Validators.required]],
      type: this.type,
    });
  }

  onSubmit() {
    if (!this.newTaskForm.valid) return;
    const { name, type } = this.newTaskForm.value;
    console.log('newTaskForm.value:', this.newTaskForm.value)

    //disatch action
  }

  createSurvey(e){
    console.log(e)
  }

}
