import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Task } from 'src/app/campaign/models/task.model';
import { Campaign } from 'src/app/dashboard/models/campaign.model';
import { addTask, getCampaigns, getWorkspace } from 'src/app/shared/store/workspace-store/workspace.actions';

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

      const workspace = state.workspace
      const campaingsAreStored = !!workspace?.campaigns

      if (!workspace) { this.store.dispatch(getWorkspace()) }
      if (!campaingsAreStored) { this.getCamapigns(workspace); return }
      if (!this.campaign) this.campaign = this.findCampaign(state)
      if (this.currentTaskIsPosted(state)) this.onTaskPosted()

    })
  }

  getCamapigns(workspace) {
    this.store.dispatch(getCampaigns({ campaign_ids: workspace.campaign_ids }))
  }

  onTaskPosted() {
    this.taskPosting = false; this.taskPosted = true; this.navigateToCampaign()
  }

  createForm() {
    this.newTaskForm = this.fb.group({
      name: ["", [Validators.required]],
      usersRequired: [5, [Validators.required, Validators.min(1)]],
      type: this.type,
    });
  }

  createSurvey({ questions }) {
    this.task = { ...this.newTaskForm.value, questions, responses: [] }
    this.sendTask()
  }

  createCardSorting({ instructions, cards, categories }) {
    this.task = { ...this.newTaskForm.value, instructions, cards, categories, responses: [] }
    this.sendTask()
  }


  createTreetest(task) {
    console.log('task:', task)

  }

  sendTask() {
    this.store.dispatch(addTask({ task: this.task, campaign_id: this.campaign_id }))
    this.taskPosting = true
  }

  findCampaign(state) {
    const campaign = state.workspace.campaigns.find(campaign => campaign._id == this.campaign_id)
    return campaign
  }

  currentTaskIsPosted(state) {
    const storedCampaign = this.findCampaign(state)
    this.campaign.user_task_ids = this.campaign?.user_task_ids || []

    const taskIsPosted = storedCampaign.user_task_ids.length > this.campaign?.user_task_ids?.length

    return taskIsPosted
  }

  navigateToCampaign() {
    this.router.navigate([`campaign/${this.campaign_id}`]);
  }
}
