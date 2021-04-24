import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Campaign } from 'src/app/dashboard/models/campaign.model';
import {UserStoreService} from 'src/app/shared/services/user-store.service';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private API_ENDPOINT = "/api"; //add endpoint here when api is deployed
  

  constructor(private http: HttpClient, private userStore: UserStoreService) { }

  getCampaign(id): Observable<Campaign> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const findCampaignEndpoint = `${this.API_ENDPOINT}/campaigns/${id}`;

    return this.http.get<Campaign>(findCampaignEndpoint, { headers })
  }

  addTask(campaign_id, task): Observable<Campaign> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const newTaskEndpoint = `${this.API_ENDPOINT}/workspace/new-campaign/${campaign_id}`;
    
    return this.http.post<Campaign>(newTaskEndpoint, task, { headers });    
  }

  getCampaignTasks(task_ids): Observable<Task[]> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const getTasksEndpoint = `${this.API_ENDPOINT}/tasks/find`;
    
    return this.http.post<Task[]>(getTasksEndpoint, task_ids, { headers })
  }
}
