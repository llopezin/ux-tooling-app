import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Campaign } from 'src/app/dashboard/models/campaign.model';
import {UserStoreService} from 'src/app/shared/services/user-store.service';
import { WINDOW } from 'src/app/shared/window-providers/window_providers';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private API_ENDPOINT = `${this.getHostname}/api`; 
  

  constructor(private http: HttpClient, private userStore: UserStoreService, @Inject(WINDOW) private window: Window) { }

  getCampaign(id): Observable<Campaign> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const findCampaignEndpoint = `${this.API_ENDPOINT}/campaigns/${id}`;

    return this.http.get<Campaign>(findCampaignEndpoint, { headers })
  }

  addTask(campaign_id, task): Observable<Campaign> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const newTaskEndpoint = `${this.API_ENDPOINT}/campaigns/${campaign_id}/new-task`;
    
    return this.http.post<Campaign>(newTaskEndpoint, task, { headers });    
  }

  getCampaignTasks(task_ids): Observable<Task[]> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const getTasksEndpoint = `${this.API_ENDPOINT}/tasks/find`;
    
    return this.http.post<Task[]>(getTasksEndpoint, task_ids, { headers })
  }

  getHostname() : string {
    return this.window.location.hostname;
}
}
