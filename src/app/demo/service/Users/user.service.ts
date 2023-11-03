import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../../api/login';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }

  login(body:login):Observable<any>{

    return this.http.post<any>(`${environment.apiUrl}api/User/Login`,body)
  }
}
