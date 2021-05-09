import { createReducer, on } from '@ngrx/store';
import { Campaign } from 'src/app/dashboard/models/campaign.model';
import { getWorkspace, getWorkspaceSuccess, getWorkspaceError, getCampaigns, getCampaignsSuccess, getCampaignsError, createCampaign, createCampaignSuccess, createCampaignError, addTask, addTaskSuccess, addTaskError, getTasks, getTasksSuccess, getTasksError } from './workspace.actions';


export interface WorkspaceState {
  workspace?: {
    id?: string,
    name?: string,
    admin_email?: string,
    campaign_ids?: string[],
    campaigns?: Campaign[],
  },
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

  //GET Workspace
  on(getWorkspace, (state) => ({ ...state, loading: true })),

  on(getWorkspaceSuccess, (state, { workspace }) => {

    let newState = {
      ...state,
      workspace,
      loading: false,
      loaded: true
    }
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


  //GET campaigns
  on(getCampaigns, (state) => ({ ...state, loading: true })),

  on(getCampaignsSuccess, (state, { campaigns }) => {

    let newState = {
      ...state,
      workspace: { ...state.workspace, campaigns: campaigns.reverse() },
      loading: false,
      loaded: true
    }

    return newState
    
  }),

  on(getCampaignsError, (state, { payload }) => ({
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


  //Create campaign
  on(createCampaign, (state) => ({ ...state, loading: true })),

  on(createCampaignSuccess, (state, { campaign_id }) => {
    let newState = {
      ...state,
      workspace: { ...state.workspace, campaign_ids: [...state.workspace.campaign_ids, campaign_id] },
      loading: false,
      loaded: true
    }
    return newState
  }),

  on(createCampaignError, (state, { payload }) => ({
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


  //Add task
  on(addTask, (state) => ({ ...state, loading: true })),

  on(addTaskSuccess, (state, { campaign }) => {
    let newState = {
      ...state,
      workspace: {
        ...state.workspace,
        campaigns: state.workspace.campaigns.map(storedCampaign =>
          storedCampaign._id === campaign._id ? campaign : storedCampaign
        )
      },
      loading: false,
      loaded: true
    }
    return newState
  }),

  on(addTaskError, (state, { payload }) => ({
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


   //GET tasks
   on(getTasks, (state) => ({ ...state, loading: true })),

   on(getTasksSuccess, (state, { tasks }) => {
     let campaign_id = window.location.href.match(/(campaign\/[0-9a-z]+)/)?.[0].replace('campaign/', '')
     let newState = {
       ...state,
       workspace: {
         ...state.workspace,
         campaigns: state.workspace.campaigns.map(storedCampaign =>
          storedCampaign._id === campaign_id 
          ? {...storedCampaign, tasks: tasks.reverse()} 
          : storedCampaign
          )
        },
        loading: false,
        loaded: true
      }

     return newState
   }),
 
   on(getTasksError, (state, { payload }) => ({
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