import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { ResultsRoutingModule } from './results-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule, ResultsRoutingModule, ReactiveFormsModule, FormsModule
  ]
})
export class ResultsModule { }
