import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Task } from 'src/app/campaign/models/task.model';
import { Campaign } from 'src/app/dashboard/models/campaign.model';
import { addTask } from 'src/app/shared/store/workspace-store/workspace.actions';
import { TasksModule } from '../create-task/create-task.module';
import { updateTaskService } from './services/update-task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  public newTaskForm: FormGroup;
  public type: FormControl;
  public task_id: string;
  public campaign_id: string;
  public taskPosting: boolean;
  public taskPosted: boolean;
  public task: Task;
  public campaign: Campaign

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private route: ActivatedRoute, private taskService: updateTaskService) {

    this.type = new FormControl(' ', [Validators.required]);
    this.campaign_id = this.route.snapshot.paramMap.get('campaign_id');
    this.task_id = this.route.snapshot.paramMap.get('task_id');
    this.updateForm({})

  }

  ngOnInit(): void {


    this.taskService.getTask(this.task_id).subscribe(task => {this.task = task; this.updateForm(this.task)})

  }

  updateForm(task) {
    this.newTaskForm = this.fb.group({
      name: [task.name || "", [Validators.required]],
      usersRequired: [task.usersRequired || 0, [Validators.required, Validators.min(1)]],
    });
  }

  updateSurvey({ questions }) {
    this.task = { ...this.newTaskForm.value, questions }
    console.log('this.task:', this.task)

    //this.store.dispatch(editTask({ task: this.task }))

    this.taskPosting = true
  }



  currentTaskIsPosted() {
    if (!this.campaign || !this.campaign.tasks) return

    return this.campaign.tasks.some(task => task.name === this.task?.name)
  }

}
