import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyComponent } from './survey/survey.component';



@NgModule({
  declarations: [SurveyComponent],
  imports: [
    CommonModule, ResultsRoutingModule, ReactiveFormsModule, FormsModule
  ]
})
export class ResultsModule { }
