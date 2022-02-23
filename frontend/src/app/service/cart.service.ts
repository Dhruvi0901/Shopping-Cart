import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  postToCart(product: Cart): Observable<Cart[]> {
    return this.http.post<Cart[]>(this.apiUrl+'/cart',product)
  }
  getCartProduct(profileId: Number): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl+'/cart/'+profileId)
  }

}
