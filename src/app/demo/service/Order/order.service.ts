import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Sales } from '../../api/sales';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  OneOrder:any

  constructor( private http : HttpClient) { }

  AddSales(body:Sales):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Order/AddOrder`,body)
  }
  UpdateSales(body:Sales):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Order/UpdateOrder`,body)
  }
  GetAllSales():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Order/GetAllOrder`)
  }
  GetOneSales(id:any):Observable<any>{
    const params = new HttpParams().append('id',id)
    return this.http.get<any>(`${environment.apiUrl}api/Order/GetOrder`,{params})
  }
  DeleteSales(id:number):Observable<any>{
    const params = new HttpParams().append('id',id)
    return this.http.delete<any>(`${environment.apiUrl}api/Order/DeleteOrder`,{params})
  }
}
