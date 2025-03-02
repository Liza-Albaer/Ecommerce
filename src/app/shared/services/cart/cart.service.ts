import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private readonly http:HttpClient) { }
  getcart():Observable<any>{
return this.http.get<any>(`${environment.baseurl}cart`,{
  headers:{
    token:localStorage.getItem('token')!
  }
})
  }
  addtocart(data:any):Observable<any>{
    return this.http.post<any>(`${environment.baseurl}cart`,data,{
      headers:{
        token:localStorage.getItem('token')!
      }
    })
      }
}
