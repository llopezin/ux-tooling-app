import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { addTask } from '../shared/store/workspace-store/workspace.actions';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  public newTaskForm: FormGroup;
  public type: FormControl;
  public campaign_id: string;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private route: ActivatedRoute) {
    this.type = new FormControl(' ', [Validators.required]);
    this.campaign_id = this.route.snapshot.paramMap.get('id')
  }
  
  ngOnInit(): void {
    this.createForm()    
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
  
  createSurvey({ questions }) {
    const task = { ...this.newTaskForm.value, questions }
    this.store.dispatch(addTask({task, campaign_id: this.campaign_id}))
  }

}
