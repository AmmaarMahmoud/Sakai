import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Purchase } from '../../api/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  OnePurchase?:Purchase
  constructor( private http : HttpClient) { }
  
  AddPurchase(body:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Purchase/AddPurchase`,body)
  }
  UpdatePurchase(body:Purchase):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Purchase/UpdatePurchase`,body)
  }
  GetAllPurchase():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Purchase/GetAllPurchase`)
  }
  GetOnePurchase(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Purchase/GetPurchase/${id}`)
  }
  DeletePurchase(id:number):Observable<any>{
    const params = new HttpParams().append('id',id)
    return this.http.delete<any>(`${environment.apiUrl}api/Purchase/DeletePurchase`,{params})
  }
}
