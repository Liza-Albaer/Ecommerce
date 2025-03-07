import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) {

   }
   onlinepayment(id:string,data:any):Observable<any>{
       return this.http.post<any>(`${environment.baseurl}orders/checkout-session/${id}?url=${environment.furl}`,data)
     }
     cashpayment(id:string,data:any):Observable<any>{
      return this.http.post<any>(`${environment.baseurl}orders/${id}`,data)
    }
}
