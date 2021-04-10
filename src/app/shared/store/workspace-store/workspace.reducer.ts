import { createReducer, on } from '@ngrx/store';
import { Campaign } from 'src/app/workspace/models/campaign.model';
import { getWorkspace, getWorkspaceSuccess, getWorkspaceError } from './workspace.actions';

export interface WorkspaceState {
    workspace?: {id?: string,
    name?: string,
    admin_email?: string,
    campaign_ids?: Campaign[]},
    loading: boolean;
    loaded: boolean;
    error: any;
  }
  
  export const initialState: WorkspaceState = {
    loading: false,
    loaded: false,
    error: null,
  };

const _workspaceReducer = createReducer(
    initialState,

    on(getWorkspace, (state) => ({ ...state, loading: true })),
        
    on(getWorkspaceSuccess, (state, {workspace}) => {
      console.log('workspace:', workspace)
      let newState = {
        ...state,
        workspace,
        loading: false,
        loaded: true
    }

    console.log('newState:', newState)
    return newState
    }),
    
    on(getWorkspaceError, (state, { payload }) => ({
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

export function workspaceReducer(state, action) {
  return _workspaceReducer(state, action);
}