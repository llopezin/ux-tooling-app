import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/campaign/models/task.model';
import { CompleteTaskService } from './services/complete-task.service';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.css']
})
export class CompleteTaskComponent implements OnInit {

  public task: Task;
  public task_id: string;
  public isActive: boolean;
  
  constructor(private taskService: CompleteTaskService, private route: ActivatedRoute) {
    this.task_id = this.route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.getTask()
  }

  getTask(){
    this.taskService.getTask(this.task_id).subscribe(res => {this.task = res, this.checkTaskIsActive()})
  }

  checkTaskIsActive(){
    const responses = this.task.responses.length
    this.isActive =  responses < this.task.usersRequired
  }


}
