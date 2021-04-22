import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { createCampaign, createCampaignError, createCampaignSuccess, createTask, createTaskError, createTaskSuccess, getCampaigns, getCampaignsError, getCampaignsSuccess, getWorkspace, getWorkspaceError, getWorkspaceSuccess } from './workspace.actions';
import { CreateTaskService } from 'src/app/tasks/services/create-task.service';

@Injectable()
export class WorkspaceEffects {
  constructor(private actions$: Actions, private dashboardService: DashboardService, private createTaskService: CreateTaskService) { }
  getWorkspace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWorkspace),
      mergeMap(() =>
        this.dashboardService.getWorkspace().pipe(
          map((workspace) => getWorkspaceSuccess({ workspace: workspace })),
          catchError((err) => of(getWorkspaceError({ payload: err })))
        )
      )
    )
  );

  getCampaigns$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCampaigns),
      mergeMap((action) =>
        this.dashboardService.getCampaigns(action.campaign_ids).pipe(
          map((campaigns) => getCampaignsSuccess({ campaigns: campaigns })),
          catchError((err) => of(getCampaignsError({ payload: err })))
        )
      )
    )
  )

  createCampaign$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCampaign),
      mergeMap((action) =>
        this.dashboardService.create(action.name).pipe(
          map((workspace) => createCampaignSuccess({ campaign_id: workspace.campaign_ids.pop() })),
          catchError((err) => of(createCampaignError({ payload: err })))
        )
      )
    )
  )

  createTask$ = createEffect(() =>
  this.actions$.pipe(
    ofType(createTask),
    mergeMap((action) =>
      this.createTaskService.createTask(action.task).pipe(
        map((campaign) => createTaskSuccess({ campaign: campaign })),
        catchError((err) => of(createTaskError({ payload: err })))
      )
    )
  )
)
}
