import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Campaign } from 'src/app/dashboard/models/campaign.model';
import { getTasks } from 'src/app/shared/store/workspace-store/workspace.actions';
import { Task } from 'src/app/tasks/create-task/models/task';

@Component({
  selector: 'app-task-summaries-list',
  templateUrl: './task-summaries-list.component.html',
  styleUrls: ['./task-summaries-list.component.css']
})
export class TaskSummariesListComponent implements OnInit {

  public tasks: Task[]
  public campaign: Campaign
  public campaign_id: string

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.campaign_id = this.route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.store.select('workspaceApp').subscribe(state=>{
      if(state.loading) return

      this.updateCampaign(state)  
      if(this.campaign?.user_task_ids)this.getTasks()
    }) 
  }

  getTasks(){
    if(this.campaign.tasks?.length === this.campaign.user_task_ids.length)return

   this.store.dispatch(getTasks({task_ids: this.campaign.user_task_ids}))
  }

  updateCampaign(state){
    this.campaign = state.workspace?.campaigns?.find(campaign=>campaign._id == this.campaign_id)
  }
}
