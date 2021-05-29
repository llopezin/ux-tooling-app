import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/campaign/models/task.model';
import { TasksRoutingModule } from 'src/app/tasks/create-task/create-task-routing.module';
import { CompleteTaskService } from '../../services/complete-task.service';
import { CompletedTaskUserStoreService } from 'src/app/shared/services/completed-task-user-store.service copy';

@Component({
  selector: 'app-complete-tree-test',
  templateUrl: './complete-tree-test.component.html',
  styleUrls: ['./complete-tree-test.component.css']
})
export class CompleteTreeTestComponent implements OnInit {

  @Input() task: Task;
  public response: {} = {};
  public taskCompleted: boolean = false;
  public taskPosting: boolean = false;

  constructor(private completeTaskService: CompleteTaskService, private completedTaskStore: CompletedTaskUserStoreService) { }

  ngOnInit(): void {
    this.taskCompleted = this.completedTaskStore.hasCompletedTask()
  }

  changeChildrenDisplay(e) {
    let parent = e.target.parentElement.parentElement
    parent.classList.toggle("hideChildren")
  }

  selectItem(e) {
    const taskId = +e.target.id + 1
    let parent = e.target.parentElement.parentElement
    const path = []

    while (parent.id != "headings") {
      path.push(parent.id)
      parent = parent.parentElement
    }

    this.response[taskId] = path.reverse()
  }

  onSubmit() {
    this.taskPosting = true;

    this.completeTaskService.postResponse(this.task._id, this.response).subscribe(res => {
      this.taskCompleted = true
      this.completedTaskStore.completeTask(this.task._id)
    })

  }

}
