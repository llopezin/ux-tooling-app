import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskService {

  private API_ENDPOINT = "/api"; //add endpoint here when api is deployed
  
  constructor(private http: HttpClient) { }

}
