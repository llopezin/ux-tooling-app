import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { getWorkspace } from "../store/workspace-store/workspace.actions";

@Injectable({
  providedIn: "root",
})
export class UserStoreService {
  private _token: string = null;
  private _workspace: string = null;
  private store: Store<AppState>
  
  constructor() {
    this._token = this.getTokenFromCookies() || null;
    this._workspace = this.getWorkspaceFromCookies() || null;
  }

  set token(token: string) {
    this._token = token;
    document.cookie = `access_token=${token}` 
  }

  set workspace(workspace: string) {
    this._workspace = workspace;
    document.cookie = `workspace=${workspace}` 
  }

  get token() {
    return this._token;
  }

  get workspace() {
    return this._workspace;
  }

  isLoggedIn() {
    return this.token !== null;
  }

  getTokenFromCookies(){
   return document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }

  getWorkspaceFromCookies(){
   return document.cookie.replace(/(?:(?:^|.*;\s*)workspace\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
}
