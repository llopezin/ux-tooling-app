import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Campaign} from 'src/app/dashboard/models/campaign.model';
import {UserStoreService} from 'src/app/shared/services/user-store.service';
import { Task } from 'src/app/campaign/models/task.model';
import { WINDOW } from 'src/app/shared/window-providers/window_providers';

@Injectable({
  providedIn: 'root'
})
export class CompleteTaskService {

  private API_ENDPOINT = `${this.getHostname}/api`


  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

  getTask(id): Observable<Task> {
    return this.http.get<Task>(`${this.API_ENDPOINT}/tasks/${id}`)
  }

  postResponse(id, response): Observable<Task> {
    return this.http.post<Task>(`${this.API_ENDPOINT}/tasks/${id}/response`, response)
  } 

  getHostname() : string {
    return this.window.location.hostname;
}
}
 