import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateTasksRoutingModule} from './update-task-routing.module';
import { UpdateTaskComponent} from './update-task.component';
import { UpdateSurveyComponent } from './components/update-survey/update-survey.component';
import { UpdateCardSortingComponent } from './components/update-card-sorting/update-card-sorting.component';
import { UpdateTreeTestComponent } from './components/update-tree-test/update-tree-test.component';




@NgModule({
  declarations: [UpdateTaskComponent, UpdateSurveyComponent, UpdateCardSortingComponent, UpdateTreeTestComponent],
  imports: [
    CommonModule,
    UpdateTasksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateTasksModule { }
