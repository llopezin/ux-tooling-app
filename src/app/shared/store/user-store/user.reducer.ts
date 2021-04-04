import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/user/models/user';
import { login, register } from './user.actions';

export interface UsersState {
    user?: User;
    loading: boolean;
    loaded: boolean;
    error: any;
  }
  
  export const initialState: UsersState = {
    loading: false,
    loaded: false,
    error: null,
  };

const _userReducer = createReducer(
    initialState,
    on(login, (state) => ({...state, user: {email: "test@test.com", campaigns:["0"]}}))
)

export default function userReducer(state, action){
    _userReducer(state, action)
}