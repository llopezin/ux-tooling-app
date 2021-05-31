import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { Login } from 'src/app/user/models/login';
import { Campaign } from '../models/campaign.model';
import { Workspace } from '../../shared/models/workspace.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private API_ENDPOINT = https://bucle-app.herokuapp.com/api/


  constructor(private http: HttpClient, private userStore: UserStoreService) { }

  getWorkspace(): Observable<Workspace> {
    const workspace_id = this.userStore.workspace;
    const token = this.userStore.token;
    const workspaceEndpoint = `${this.API_ENDPOINT}/workspace/${workspace_id}`;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    
    return this.http.get<Workspace>(workspaceEndpoint, { headers })
  }

  create(name: { name: String }): Observable<Workspace> {
    const workspace_id = this.userStore.workspace;
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const newCampaignEndpoint = `${this.API_ENDPOINT}/workspace/new-campaign/${workspace_id}`;
    
    return this.http.post<Workspace>(newCampaignEndpoint, name, { headers });    
  }

  getCampaigns(campaign_ids): Observable<Campaign[]> {
    const campaignsEndpoint = `${this.API_ENDPOINT}/campaigns/find`;
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    
    return this.http.post<Campaign[]>(campaignsEndpoint, campaign_ids, { headers })
  }
}
