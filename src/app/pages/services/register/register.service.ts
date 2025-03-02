import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registerdata } from '../../../shared/interface/registerdata';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {}
     postregister(data:any): Observable<any>{
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
      }

}


