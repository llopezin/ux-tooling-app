import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { getWorkspace } from "../store/workspace-store/workspace.actions";

@Injectable({
  providedIn: "root",
})

export class CompletedTaskUserStoreService {
  private _completed: string;

  
  constructor() {
    this._completed = this.getcompletedFromCookies() || null;
  }

  set completed(value) {
    this._completed = value;
    document.cookie = `completed=${value}` 
  }

  get completed() {
    return this._completed;
  }

  hasCompletedTask() {
    return this.completed !== null;
  }

  completeTask(task){
    console.log('this.getcompletedFromCookies():', this.getcompletedFromCookies())
    let completed = JSON.parse(this.getcompletedFromCookies())
 

    completed.push(task)

    this._completed = completed
    document.cookie = `completed=${completed}` 
  }

  getcompletedFromCookies(){
   return document.cookie.replace(/(?:(?:^|.*;\s*)completed\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "[]";
  }

}
