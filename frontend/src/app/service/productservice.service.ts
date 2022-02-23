import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

apiUrl = 'http://localhost:3000'


  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'/product')
  }

  postProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiUrl+'/product',product)
  }

  getAdminProduct(profileId: Number): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'/product/admin/'+profileId)
  }

  getEditProduct(productId: Number): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'/product/edit/'+productId)
  }


  putEditProduct(productId: Number,product: Product): Observable<Product[]> {
    return this.http.put<Product[]>(this.apiUrl+'/product/'+productId,product)
  }
}
