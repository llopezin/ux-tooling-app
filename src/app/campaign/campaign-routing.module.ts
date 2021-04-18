import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { CampaignComponent } from './campaign.component';

const routes: Routes = [{
   path: '', component: CampaignComponent, canActivate: [AuthGuardService] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
