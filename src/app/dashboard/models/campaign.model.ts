import { Task } from "src/app/campaign/models/task.model";

export interface Campaign  {
    _id?: string,
    name: string,
    user_task_ids?: string[],
    tasks?: Task[]
}