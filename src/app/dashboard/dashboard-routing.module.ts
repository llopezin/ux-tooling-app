import { RouterModule, Routes } from "@angular/router";


import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import {AuthGuardService} from '../shared/guards/auth-guard.service';

const routes: Routes = [
{ path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
