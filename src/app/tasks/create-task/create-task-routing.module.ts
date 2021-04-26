import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { CreateTaskComponent } from "./create-task.component";
import { AuthGuardService } from "src/app/shared/guards/auth-guard.service";

const routes: Routes = [
{ path: '', component: CreateTaskComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule { }
