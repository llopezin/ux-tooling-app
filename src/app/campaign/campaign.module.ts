import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { CampaignService } from './services/campaign.service';


@NgModule({
  declarations: [CampaignComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ],
  providers: [CampaignService]
})
export class CampaignModule { }
