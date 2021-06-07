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
  public nullTask: { name: any, usersRequired: any }

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private taskService: updateTaskService,
  ) {

    this.type = new FormControl(' ', [Validators.required]);
    this.campaign_id = this.route.snapshot.paramMap.get('campaign_id');
    this.task_id = this.route.snapshot.paramMap.get('task_id');
    this.nullTask = { name: "", usersRequired: "" }
    this.updateForm(this.nullTask)

  }

  ngOnInit(): void {
    this.taskService.getTask(this.task_id).subscribe(task => { this.task = task; this.updateForm(this.task) })
  }

  updateForm({ name, usersRequired }) {

    this.newTaskForm = this.fb.group({

      name: [name, [Validators.required]],
      usersRequired: [usersRequired, [Validators.required, Validators.min(1)]],

    });

  }

  updateSurvey(event) {
    let questions = event?.questions || []
    this.task = { ...this.newTaskForm.value, questions, _id: this.task_id }

    this.taskService.updateTask(this.task_id, this.task).subscribe(res => {
      this.taskPosted = true;
      this.navigateToCampaign()
    })


    this.taskPosting = true
  }

  navigateToCampaign(){
    this.router.navigate([`campaign/${this.campaign_id}`])
  }

}
