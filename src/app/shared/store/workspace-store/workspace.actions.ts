import { createAction, props } from '@ngrx/store';
import { Workspace } from '../../models/workspace.model';
import { Campaign } from "../../../dashboard/models/campaign.model"

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






export const register = createAction('[Workspace] register')