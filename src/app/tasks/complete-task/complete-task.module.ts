import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteSurveyComponent } from './components/complete-survey/complete-survey.component';
import { CompleteTreeTestComponent } from './components/complete-tree-test/complete-tree-test.component';
import { CompleteCardSortingComponent } from './components/complete-card-sorting/complete-card-sorting.component';
import { CompleteTaskComponent } from './complete-task.component';
import { CompleteTaskRoutingModule } from './complete-task-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CompleteSurveyComponent, CompleteTreeTestComponent, CompleteCardSortingComponent, CompleteTaskComponent],
  imports: [
    CommonModule, CompleteTaskRoutingModule,  FormsModule, ReactiveFormsModule,
  ]
})
export class CompleteTaskModule { }
