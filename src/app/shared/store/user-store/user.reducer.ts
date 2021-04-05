import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/user/models/user';
import { login, loginSuccess, loginError, register } from './user.actions';

export interface UsersState {
    userIsLoggedIn?: boolean;
    loading: boolean;
    loaded: boolean;
    error: any;
  }
  
  export const initialState: UsersState = {
    userIsLoggedIn: false,
    loading: false,
    loaded: false,
    error: null,
  };

const _userReducer = createReducer(
    initialState,

    on(login, (state) => ({ ...state, loading: true })),

    on(loginSuccess, (state) => {
      return {
        ...state,
        userIsLoggedIn: true,
        loading: false,
        loaded: true,
      };
    }),

    on(loginError, (state, { payload }) => ({
      ...state,
      userIsLoggedIn: false,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
      },
    })),
   
)

export function userReducer(state, action) {
  return _userReducer(state, action);
}