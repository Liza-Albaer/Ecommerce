import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(private readonly http:HttpClient) { }
  forgetPassword(data:any):Observable<any>{
return this.http.post(`${environment.baseurl}auth/forgotPasswords`,data);

  }
  verifycode(data:any):Observable<any>{
    return this.http.post(`${environment.baseurl}auth/verifyResetCode`,data);

      }
      resetpassword(data:any):Observable<any>{
        return this.http.put(`${environment.baseurl}auth/resetPassword`,data);

          }
}
