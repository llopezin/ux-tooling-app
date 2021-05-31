import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { Login } from 'src/app/user/models/login';
import { Workspace } from '../models/workspace.model';

@Injectable({
  providedIn: 'root'
})
export class workspaceService {
  private API_ENDPOINT = "https://bucle-app.herokuapp.com/api/"


  constructor(private http: HttpClient, private userStore: UserStoreService) { }

  getWorkspace(): Observable<Workspace> {
    const workspace_id = this.userStore.workspace;
    const token = this.userStore.token;
    const workspaceEndpoint = `${this.API_ENDPOINT}/workspace/${workspace_id}`;

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<Workspace>(workspaceEndpoint, { headers })
  }
}
