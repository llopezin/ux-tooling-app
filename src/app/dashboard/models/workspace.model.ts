import { Campaign } from "./campaign.model";

export interface Dashboard {
    id?: string,
    name?: string,
    admin_email: string,
    campaign_ids?: string[],
}