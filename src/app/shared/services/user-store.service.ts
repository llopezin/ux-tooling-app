import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserStoreService {
  private _token: string = null;
  constructor() {
    this._token = this.getTokenFromCookies() || null;
  }

  set token(token: string) {
    this._token = token;
    document.cookie = `access_token=${token}` 
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return this.token !== null;
  }

  getTokenFromCookies(){
   return document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
}
