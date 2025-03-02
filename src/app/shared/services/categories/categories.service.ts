import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allcategories } from '../../interface/categories';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  getallcategories():Observable<allcategories>{
    return this.http.get<allcategories>(`${environment.baseurl}categories`);

  }
}
