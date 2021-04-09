import { RouterModule, Routes } from "@angular/router";


import { NgModule } from "@angular/core";
import { CampaignsComponent } from "./campaigns.component";
import {AuthGuardService} from '../shared/guards/auth-guard.service';

const routes: Routes = [
{ path: '', component: CampaignsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignsRoutingModule { }
