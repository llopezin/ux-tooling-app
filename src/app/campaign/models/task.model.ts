export interface Task{
    _id:string,
    name: string,
    type: string,
    active: boolean,
    completed: boolean,
    responses: [],
    task: object,
    results: object
}