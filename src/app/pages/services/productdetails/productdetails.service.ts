import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { productDetails, products } from '../../../shared/interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private readonly http:HttpClient)
  {

  }
  getproductdetails(id:string):Observable<productDetails>{
    return this.http.get<productDetails>(`${environment.baseurl}products/${id}`)
  }
}
