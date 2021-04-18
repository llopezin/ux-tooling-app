import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TasksRoutingModule} from './tasks-routing.module';
import {CreateTaskComponent} from './create-task.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { CreateCardSortingComponent } from './components/create-card-sorting/create-card-sorting.component';
import { CreateTreeTestComponent } from './components/create-tree-test/create-tree-test.component';



@NgModule({
  declarations: [CreateTaskComponent, CreateSurveyComponent, CreateCardSortingComponent, CreateTreeTestComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
