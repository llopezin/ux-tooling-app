import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/campaign/models/task.model';
import { CompleteTaskService } from '../../complete-task/services/complete-task.service';


@Component({
  selector: 'app-tree-test',
  templateUrl: './tree-test.component.html',
  styleUrls: ['./tree-test.component.css']
})
export class TreeTestComponent implements OnInit {

  public task: Task;
  public task_id: string;
  public responsesData: {} = {};


  constructor(private route: ActivatedRoute, private taskService: CompleteTaskService,) {
    this.task_id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getTask()
    console.log(this.responsesData);

  }


  getTask() {
    this.taskService.getTask(this.task_id).subscribe(res => {
      this.task = res;
      this.collectResponses()
    })
  }

  collectResponses() {
    this.task.tasks.forEach((task, i) => {
      this.responsesData[i + 1] = {}
    });

    this.task.responses.forEach(response => {
      for (let task in response) {
        let selectesHeadingIndex = response[task].length - 1
        let selectedHeading = response[task][selectesHeadingIndex]

        let count = this.responsesData[task][selectedHeading]?.count + 1 || 1
        this.responsesData[task][selectedHeading] = { path: response[task], count: count }
      }
    })
  }

  getPercentage(usersCount) {
    return ~~(usersCount / (this.task.responses.length / 100))
  }

}