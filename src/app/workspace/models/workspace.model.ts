import { Campaign } from "./campaign.model";

export interface Workspace {
    id?: string,
    name?: string,
    admin_email: string,
    campaign_ids?: Campaign[],
}