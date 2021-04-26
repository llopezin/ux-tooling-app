import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../../user/models/login';
import {Observable} from 'rxjs';
import {UserStoreService} from '../../shared/services/user-store.service';
import {map} from 'rxjs/operators';
import { Task } from 'src/app/campaign/models/task.model';
import { Campaign } from 'src/app/dashboard/models/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskService {

  private API_ENDPOINT = "/api"; //add endpoint here when api is deployed
  
  constructor(private http: HttpClient) { }

}
