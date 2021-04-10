import { ActionReducerMap } from '@ngrx/store';
import * as userReducers from './shared/store/user-store/user.reducer';
import * as workspaceReducers from './shared/store/workspace-store/workspace.reducer';

export interface AppState {
  usersApp: userReducers.UsersState;
  workspaceApp: workspaceReducers.WorkspaceState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usersApp: userReducers.userReducer,
  workspaceApp: workspaceReducers.workspaceReducer,
};
