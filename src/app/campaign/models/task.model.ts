export interface Task{
    id:string,
    name: string,
    type: string,
    active: boolean,
    completed: boolean,
    responses: [],
    task: object,
    results: object
}