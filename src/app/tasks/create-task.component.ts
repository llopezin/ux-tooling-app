import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Task } from '../campaign/models/task.model';
import { Campaign } from '../dashboard/models/campaign.model';
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
  public taskPosting: boolean;
  public taskPosted: boolean;
  public task: Task;
  public campaign: Campaign

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {

    this.type = new FormControl(' ', [Validators.required]);
    this.campaign_id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.createForm()
    this.store.select('workspaceApp').subscribe(state => {
      if (state.loading) return

      this.updateCampaign(state)
      if (this.currentTaskIsPosted()) { this.taskPosting = false; this.taskPosted = true; this.navigateToCampaign() }

    })
  }

  createForm() {
    this.newTaskForm = this.fb.group({
      name: ["", [Validators.required]],
      usersRequired: [5, [Validators.required, Validators.min(1)]],
      type: this.type,
    });
  }



  onSubmit() {
    if (!this.newTaskForm.valid) return;
    const { name, type } = this.newTaskForm.value;

    //disatch action
  }

  createSurvey({ questions }) {
    this.task = { ...this.newTaskForm.value, questions }
    this.store.dispatch(addTask({ task: this.task, campaign_id: this.campaign_id }))
    this.taskPosting = true
  }

  updateCampaign(state) {
    this.campaign = state.workspace?.campaigns?.find(campaign => campaign._id == this.campaign_id)
  }

  currentTaskIsPosted() {
    if (!this.campaign || !this.campaign.tasks) return

    return this.campaign.tasks.some(task => task.name === this.task?.name)
  }

  navigateToCampaign() {  
    this.router.navigate([`campaign/${this.campaign_id}`]);
  }
}
