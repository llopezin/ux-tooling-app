import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.css']
})
export class TaskSummaryComponent implements OnInit {

  @Input() task: Task

  constructor() { }

  ngOnInit(): void {
  }

}
