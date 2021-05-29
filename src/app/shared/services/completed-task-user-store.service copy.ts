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
    console.log('this.getcompletedFromCookies():', this.getcompletedFromCookies())
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
    return this.completed != null;
  }

  completeTask(task){
    this._completed = task
    document.cookie = `completed=${task}` 
  }

  getcompletedFromCookies(){
   return document.cookie.replace(/(?:(?:^|.*;\s*)completed\s*\=\s*([^;]*).*$)|^.*$/, "$1") || null;
  }

}
