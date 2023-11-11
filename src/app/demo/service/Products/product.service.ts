import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../../api/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  AllProduct:any
  OneUpdateProduct?:Product
  constructor( private http : HttpClient) { }

  AddProduct(body:Product):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Product/AddProduct`,body)
  }
  UpdateProduct(body:Product):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Product/UpdateProduct`,body)
  }
  GetAllProduct():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Product/GetAllProduct`)
  }
  GetOneProduct(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Product/GetProduct/${id}`)
  }
  DeleteProduct(id:number):Observable<any>{
    const params = new HttpParams().append('id',id)
    
    return this.http.delete<any>(`${environment.apiUrl}api/Product/DeleteProduct`,{params})
  }
}
