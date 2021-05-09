import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserStoreService} from 'src/app/shared/services/user-store.service';
import { User } from 'src/app/user/models/user';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  private API_ENDPOINT = "/api"; //add endpoint here when api is deployed
  

  constructor(private http: HttpClient, private userStore: UserStoreService) { }

  postInvitedUser(email):  Observable<User> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const endpoint = `${this.API_ENDPOINT}/invited-users`;
    const workspace_id = this.userStore.workspace

    return this.http.post<User>(endpoint, {email, workspace_id}, { headers }) 
  }
}
