import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
 login, loginError, loginSuccess
} from './user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

 loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.userService.login(action.userDetails).pipe(
          map((user) => loginSuccess({ user: user })),
          catchError((err) => of(loginError({ payload: err })))
        )
      )
    )
  );
}
