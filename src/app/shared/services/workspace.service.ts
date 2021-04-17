import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { Login } from 'src/app/user/models/login';
import { Campaign } from '../models/campaign.model';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private API_ENDPOINT = "/api"; //add endpoint here when api is deployed


  constructor(private http: HttpClient, private userStore: UserStoreService) { }

  getDashboard(): Observable<Dashboard> {
    const Dashboard_id = this.userStore.Dashboard;
    const token = this.userStore.token;
    const DashboardEndpoint = `${this.API_ENDPOINT}/dashboard/${Dashboard_id}`;

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<Dashboard>(DashboardEndpoint, { headers })
  }
}
