import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Task } from 'src/app/campaign/models/task.model';
import { Campaign } from 'src/app/dashboard/models/campaign.model';
import { addTask } from 'src/app/shared/store/workspace-store/workspace.actions';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  public newTaskForm: FormGroup;
  public type: FormControl;
  public task_id: string;
  public campaign_id: string;
  public taskPosting: boolean;
  public taskPosted: boolean;
  public task: Task;
  public campaign: Campaign

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {

    this.type = new FormControl(' ', [Validators.required]);
    this.campaign_id = this.route.snapshot.paramMap.get('id');
    this.task_id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.updateForm()

    this.store.select('workspaceApp').subscribe(state => {
      if (state.loading) return

      let campaigns = state.workspace.campaigns
      if(campaigns)this.campaign = campaigns.find(campaing => campaing._id === this.campaign_id)

      if(this.campaign)this.task = this.campaign.tasks.find(task => task._id === this.task_id)
      
      if (this.currentTaskIsPosted()) { this.taskPosting = false; this.taskPosted = true }

    })
  }

  updateForm() {
    this.newTaskForm = this.fb.group({
      name: ["", [Validators.required]],
      usersRequired: [5, [Validators.required, Validators.min(1)]],
    });
  }

  updateSurvey({ questions }) {
    this.task = { ...this.newTaskForm.value, questions }
    console.log('this.task:', this.task)

    //this.store.dispatch(editTask({ task: this.task }))

    this.taskPosting = true
  }



  currentTaskIsPosted() {
    if (!this.campaign || !this.campaign.tasks) return

    return this.campaign.tasks.some(task => task.name === this.task?.name)
  }

}
