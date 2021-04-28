import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { AuthGuardService } from "src/app/shared/guards/auth-guard.service";
import { ResultsComponent } from "./results.component";

const routes: Routes = [
{ path: '', component: ResultsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule { }
