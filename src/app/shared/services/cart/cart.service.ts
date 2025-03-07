import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { cart } from '../../interface/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private readonly http:HttpClient) { }
  getcart():Observable<cart>{
return this.http.get<cart>(`${environment.baseurl}cart`)
  }
  addtocart(data:any):Observable<cart>{
    return this.http.post<cart>(`${environment.baseurl}cart`,data)
    }
  clearcartdata():Observable<any>{
        return this.http.delete<any>(`${environment.baseurl}cart`)
    }
  removeproduct(id:string):Observable<any>{
      return this.http.delete<any>(`${environment.baseurl}cart/${id}`)
      }
  updatetocart(data:any,id:string):Observable<cart>{
        return this.http.put<cart>(`${environment.baseurl}cart/${id}`,data)
        }
}
