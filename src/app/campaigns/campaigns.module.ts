import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsComponent } from './campaigns.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { CampaignsService } from './services/campaigns.service';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  providers: [CampaignsService],
  declarations: [CampaignsComponent, CampaignsListComponent, CreateCampaignComponent],
})
export class CampaignsModule { }
