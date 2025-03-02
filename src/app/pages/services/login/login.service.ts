import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { logindata } from '../../../shared/interface/login';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}
     postlogin(data:logindata): Observable<any>{
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
      }
      getuserdata(token:string){
        try{
          return jwtDecode(token);
        }catch(error){
          return null;
        }

      }
}
