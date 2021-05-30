import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Task } from 'src/app/campaign/models/task.model';
import {UserStoreService} from 'src/app/shared/services/user-store.service';
import { WINDOW } from 'src/app/shared/window-providers/window_providers';

@Injectable({
  providedIn: 'root'
})
export class updateTaskService {

  
  private API_ENDPOINT = `${this.getHostname}/api`


  constructor(private http: HttpClient, private userStore: UserStoreService, @Inject(WINDOW) private window: Window) { }

  getTask(id): Observable<Task> {
    return this.http.get<Task>(`${this.API_ENDPOINT}/tasks/${id}`)
  }

  updateTask(id, updatedTask): Observable<Task> {
    const token = this.userStore.token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.put<Task>(`${this.API_ENDPOINT}/tasks/update/${id}`, updatedTask, { headers })
  }

  getHostname() : string {
    return this.window.location.hostname;
}

}
