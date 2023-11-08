import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Client } from '../../api/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  AllClient:any
  oneClient:any
  constructor( private http : HttpClient) { }
  AddClient(body:Client):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Client/AddClient`,body)
  }
  UpdateClient(body:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Client/UpdateClient`,body)
  }
  GetAllClient():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Client/GetAllClient`)
  }
  GetOneClient(id:any):Observable<any>{
    const params = new HttpParams().append('id',id)
    return this.http.get<any>(`${environment.apiUrl}api/Client/GetClient`,{params})
  }
  DeleteClient(id:number):Observable<any>{
    const params = new HttpParams().append('id',id)
    return this.http.delete<any>(`${environment.apiUrl}api/Client/DeleteClient`,{params})
  }


}
