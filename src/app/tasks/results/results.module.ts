import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyComponent } from './survey/survey.component';
import { CardSortingComponent } from './card-sorting/card-sorting.component';



@NgModule({
  declarations: [SurveyComponent, CardSortingComponent],
  imports: [
    CommonModule, ResultsRoutingModule, ReactiveFormsModule, FormsModule
  ]
})
export class ResultsModule { }
