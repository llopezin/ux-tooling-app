import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { CampaignService } from './services/campaign.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskSummariesListComponent } from './components/task-summaries-list/task-summaries-list.component';
import { TaskSummaryComponent } from './components/task-summary/task-summary.component';


@NgModule({
  declarations: [CampaignComponent, TaskSummariesListComponent, TaskSummaryComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule,
  ],
  providers: [CampaignService]
})
export class CampaignModule { }
