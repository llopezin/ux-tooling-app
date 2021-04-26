export interface Task{
    _id:string,
    usersRequired: number,
    name: string,
    type: string,
    active: boolean,
    completed: boolean,
    responses: [],
    questions: {multipleChoice: Boolean, options: string}[],
    results: object
}