import { createAction, props } from '@ngrx/store';
import { Workspace } from '../../models/workspace.model';
import { Campaign } from "../../../dashboard/models/campaign.model"
import { Task } from 'src/app/campaign/models/task.model';

//Workspace
export const getWorkspace = createAction(
    '[Workspace] get workspace'
);

export const getWorkspaceSuccess = createAction(
    '[Workspace] get workspace success',
    props<{ workspace: Workspace }>()
);

export const getWorkspaceError = createAction(
    '[Workspace] get workspace Error',
    props<{ payload: any }>()
);


//get campaigns
export const getCampaigns = createAction(
    '[Workspace] get campaigns',
    props<{ campaign_ids: string[] }>()
);

export const getCampaignsSuccess = createAction(
    '[Workspace] get campaigns success',
    props<{ campaigns: Campaign[] }>()
);

export const getCampaignsError = createAction(
    '[Workspace] get campaigns Error',
    props<{ payload: any }>()
);


//create campaigns
export const createCampaign = createAction(
    '[Workspace] create campaigns',
    props<{ name: {name: String} }>()
);

export const createCampaignSuccess = createAction(
    '[Workspace] create campaigns success',
    props<{ campaign_id: string }>()
);

export const createCampaignError = createAction(
    '[Workspace] create campaigns Error',
    props<{ payload: any }>()
);


//create task
export const addTask = createAction(
    '[Workspace] create task',
    props<{ task: Task, campaign_id: string }>()
);

export const addTaskSuccess = createAction(
    '[Workspace] create task success',
    props<{ campaign: Campaign }>()
);

export const addTaskError = createAction(
    '[Workspace] create task Error',
    props<{ payload: any }>()
);

//get tasks
export const getTasks = createAction(
    '[Workspace] get tasks',
    props<{ task_ids: string[] }>()
);

export const getTasksSuccess = createAction(
    '[Workspace] get tasks success',
    props<{ tasks: Task[] }>()
);

export const getTasksError = createAction(
    '[Workspace] get tasks Error',
    props<{ payload: any }>()
);







