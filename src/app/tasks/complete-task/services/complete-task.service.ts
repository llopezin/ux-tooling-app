import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Campaign} from 'src/app/dashboard/models/campaign.model';
import {UserStoreService} from 'src/app/shared/services/user-store.service';
import { Task } from 'src/app/campaign/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class CompleteTaskService {

  private API_ENDPOINT = "/api"

  constructor(private http: HttpClient) { }

  getTask(id): Observable<Task> {
    return this.http.get<Task>(`${this.API_ENDPOINT}/tasks/${id}`)
  }

/*   postResponse(response): Observable<> {
    return this.http.post<>()
  } */
}
