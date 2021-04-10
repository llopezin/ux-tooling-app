import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { WorkspaceService } from 'src/app/workspace/services/workspace.service';
import { getWorkspace, getWorkspaceError, getWorkspaceSuccess } from './workspace.actions';

@Injectable()
export class WorkspaceEffects {
  constructor(private actions$: Actions, private workspaceService: WorkspaceService) {}
    getWorkspace$ = createEffect(() =>
        this.actions$.pipe(
          ofType(getWorkspace),
          mergeMap(() =>
            this.workspaceService.getWorkspace().pipe(
              map((workspace) => getWorkspaceSuccess({ workspace: workspace } )),
              catchError((err) => of(getWorkspaceError({ payload: err })))
            )
          )
        )
      );
  }
