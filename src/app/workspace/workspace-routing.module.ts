import { RouterModule, Routes } from "@angular/router";


import { NgModule } from "@angular/core";
import { WorkspaceComponent } from "./workspace.component";
import {AuthGuardService} from '../shared/guards/auth-guard.service';

const routes: Routes = [
{ path: '', component: WorkspaceComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule { }
