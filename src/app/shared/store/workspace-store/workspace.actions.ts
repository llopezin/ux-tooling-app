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

//campaigns
export const getCampaigns = createAction(
    '[Workspace] get campaigns',
    props<{ campaign_ids: string[] }>()
);

export const getCampaignsSuccess = createAction(
    '[Workspace] get campaigns success',
    props<{ camapigns: Campaign[] }>()
);

export const getCampaignsError = createAction(
    '[Workspace] get campaigns Error',
    props<{ payload: any }>()
);





export const register = createAction('[Workspace] register')