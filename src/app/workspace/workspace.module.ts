import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { WorkspaceService } from './services/workspace.service';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WorkspaceRoutingModule } from './workspace-routing.module';



@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, WorkspaceRoutingModule
  ],
  providers: [],
  declarations: [WorkspaceComponent, CampaignsListComponent, CreateCampaignComponent],
})
export class WorkspaceModule { }
