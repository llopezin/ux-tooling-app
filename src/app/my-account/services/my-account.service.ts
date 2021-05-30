import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserStoreService} from 'src/app/shared/services/user-store.service';
import { User } from 'src/app/user/models/user';
import { WINDOW } from 'src/app/shared/window-providers/window_providers';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  private API_ENDPOINT = `${this.getHostname}/api`
  

  constructor(private http: HttpClient, private userStore: UserStoreService, @Inject(WINDOW) private window: Window) { }

  postInvitedUser(email):  Observable<User> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const endpoint = `${this.API_ENDPOINT}/invited-users`;
    const workspace_id = this.userStore.workspace

    return this.http.post<User>(endpoint, {email, workspace_id}, { headers }) 
  }

  getHostname() : string {
    return this.window.location.hostname;
}
}
