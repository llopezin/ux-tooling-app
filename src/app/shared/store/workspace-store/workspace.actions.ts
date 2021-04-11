import { createAction, props } from '@ngrx/store';
import { Workspace } from 'src/app/workspace/models/workspace.model';
import { Campaign } from "../../../workspace/models/campaign.model"

//workspace
export const getWorkspace = createAction(
    '[Workspace] get workspace'
);

export const getWorkspaceSuccess = createAction(
    '[Workspace] get campaigns success',
    props<{ workspace: Workspace }>()
);

export const getWorkspaceError = createAction(
    '[Workspace] get campaigns Error',
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
    props<{ name: string }>()
);

export const createCampaignSuccess = createAction(
    '[Workspace] create campaigns success',
    props<{ camapign: Campaign }>()
);

export const createCampaignError = createAction(
    '[Workspace] create campaigns Error',
    props<{ payload: any }>()
);






export const register = createAction('[Workspace] register')