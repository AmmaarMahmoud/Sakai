import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Wanted } from '../../api/wanted';

@Injectable({
  providedIn: 'root'
})
export class WantedService {
  oneWanted:any
  AllWanted:any
  constructor( private http : HttpClient) { }
  AddWanted(body:Wanted):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Wanted/AddWanted`,body)
  }
  UpdateWanted(body:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Wanted/UpdateWanted`,body)
  }
  GetAllWanted():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Wanted/GetAllWanted`)
  }
  GetOneWanted(id:any):Observable<any>{
    const params = new HttpParams().append('id',id)
    return this.http.get<any>(`${environment.apiUrl}api/Wanted/GetWanted`,{params})
  }
  DeleteWanted(id:number):Observable<any>{
    const params = new HttpParams().append('id',id)
    return this.http.delete<any>(`${environment.apiUrl}api/Wanted/DeleteWanted`,{params})
  }

}
