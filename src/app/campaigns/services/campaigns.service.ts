import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { Login } from 'src/app/user/models/login';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private API_ENDPOINT = "/api"; //add endpoint here when api is deployed
  private loginRoute = `${this.API_ENDPOINT}/auth/login`; 
  private registerRoute = `${this.API_ENDPOINT}/register`; 
  constructor(private http: HttpClient, private userStore: UserStoreService) { }


  create() {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.post(this.loginRoute, name, { headers }).pipe(
      map((res: any) => {
        this.userStore.token = res.access_token; //Save token to local storage
        return res;
      })
    );
  }
}
