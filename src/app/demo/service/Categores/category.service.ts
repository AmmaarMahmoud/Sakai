import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http:HttpClient) { }

  AddCategory(body:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}api/Category/AddCategory`,body)
  }
  GetAllCategory():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Category/GetAllCategory`)
  }
  GetOneCategory(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}api/Category/GetCategory/${id}`)
  }
  DeleteCategory(id:any):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}api/Category/DeleteCategory/${id}`)
  }
}
