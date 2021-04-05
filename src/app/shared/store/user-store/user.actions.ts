import { createAction, props } from '@ngrx/store';
import { Login } from 'src/app/user/models/login';
import { User } from 'src/app/user/models/user';

//Login
export const login = createAction(
    '[User] login',
    props<{ userDetails: Login }>()
);

export const loginSuccess = createAction(
    '[User] Login success',
    props<{ user: User }>()
);

export const loginError = createAction(
    '[User] Login Error',
    props<{ payload: any }>()
);

export const register = createAction('[User] register')