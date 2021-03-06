import { Campaign } from "../../dashboard/models/campaign.model";

export interface Workspace {
    id?: string,
    name?: string,
    admin_email: string,
    campaign_ids?: string[],
}