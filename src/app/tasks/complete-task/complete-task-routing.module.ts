import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { CompleteTaskComponent } from "./complete-task.component";

const routes: Routes = [
{ path: '', component: CompleteTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteTaskRoutingModule { }
