import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import { Observable } from "rxjs";
import { UserStoreService } from "../../shared/services/user-store.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class UserService {
  private API_ENDPOINT = "/api"; //add endpoint here when api is deployed
  private loginRoute = `${this.API_ENDPOINT}/auth/login`; 
  private registerRoute = `${this.API_ENDPOINT}/register`; 
  constructor(private http: HttpClient, private userStore: UserStoreService) { }

  login(user: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginRoute, user, { headers }).pipe(
      map((res: any) => {
        this.userStore.token = res.access_token; //Save token to local storage
        return res;
      })
    ); 
  }

  register(user: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.registerRoute, user, { headers });
  }

  getProfile() {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get(`${this.API_ENDPOINT}/profile`, { headers }).pipe(
      map((res: any) => {
        this.userStore.workspace = res.workspace_id; //Save workspace to local storage
        return res;
      })
    ); ;
  }

}
 