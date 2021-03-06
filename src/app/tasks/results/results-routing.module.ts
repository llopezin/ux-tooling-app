import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { AuthGuardService } from "src/app/shared/guards/auth-guard.service";
import { SurveyComponent } from "./survey/survey.component";
import { CardSortingComponent } from "./card-sorting/card-sorting.component";
import { TreeTestComponent } from "./tree-test/tree-test.component";

const routes: Routes = [
{ path: 'Survey', component: SurveyComponent, canActivate: [AuthGuardService] },
{ path: 'Card sorting', component: CardSortingComponent, canActivate: [AuthGuardService] },
{ path: 'Tree test', component: TreeTestComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule { }
