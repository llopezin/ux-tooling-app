import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { createCampaign, createCampaignError, createCampaignSuccess, addTask, addTaskError, addTaskSuccess, getCampaigns, getCampaignsError, getCampaignsSuccess, getWorkspace, getWorkspaceError, getWorkspaceSuccess, getTasks, getTasksSuccess, getTasksError } from './workspace.actions';

import { CampaignService } from 'src/app/campaign/services/campaign.service';

@Injectable()
export class WorkspaceEffects {
  constructor(private actions$: Actions, private dashboardService: DashboardService, private campaignService: CampaignService) { }
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

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      mergeMap(({ task, campaign_id }) =>
        this.campaignService.addTask(campaign_id, task).pipe(
          map((campaign) => addTaskSuccess({ campaign: campaign })),
          catchError((err) => of(addTaskError({ payload: err })))
        )
      )
    )
  )

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasks),
      mergeMap(({ task_ids }) =>
        this.campaignService.getCampaignTasks(task_ids).pipe(
          map((tasks) => getTasksSuccess({ tasks: tasks })),
          catchError((err) => of(getTasksError({ payload: err })))
        )
      )
    )
  )
}
