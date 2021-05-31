import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskService {

  private API_ENDPOINT = "https://bucle-app.herokuapp.com/api"
  
  constructor(private http: HttpClient) { }

}
