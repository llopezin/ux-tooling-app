import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { CreateTaskComponent } from "./create-task.component";

const routes: Routes = [
{ path: '', component: CreateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule { }
