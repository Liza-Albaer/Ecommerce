import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allproducts } from '../../interface/product';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient) { }
  getallproducts():Observable<allproducts>{
return this.http.get<allproducts>(`${environment.baseurl}products`);
  }
}
