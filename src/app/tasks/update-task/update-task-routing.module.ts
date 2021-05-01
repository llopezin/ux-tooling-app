import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { UpdateTaskComponent } from "./update-task.component";
import { AuthGuardService } from "src/app/shared/guards/auth-guard.service";

const routes: Routes = [
{ path: '', component: UpdateTaskComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTasksRoutingModule { }
