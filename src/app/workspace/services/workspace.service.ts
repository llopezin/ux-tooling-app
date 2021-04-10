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
export class WorkspaceService {
  private workspace_id = this.userStore.workspace
  private API_ENDPOINT = "/api"; //add endpoint here when api is deployed
  private workspaceEndpoint = `${this.API_ENDPOINT}/workspace/${this.workspace_id}`; 
  private newCampaignEndpoint = `${this.API_ENDPOINT}/workspace/new-campaign/${this.workspace_id}`; 
  private token = this.userStore.token;
  
  constructor(private http: HttpClient, private userStore: UserStoreService) { }
  
  
  getWorkspace(): Observable<Workspace>{
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    return this.http.get<Workspace>(this.workspaceEndpoint, {headers})
  }
  
  create(name: {name: String}) {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    return this.http.post(this.newCampaignEndpoint, name, {headers} );
  }
}
