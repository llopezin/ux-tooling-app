import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { DashboardService } from './services/dashboard.service';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, DashboardRoutingModule
  ],
  providers: [],
  declarations: [DashboardComponent, CampaignsListComponent, CreateCampaignComponent],
})
export class DashboardModule { }
