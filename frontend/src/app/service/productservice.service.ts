import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Placeorder, Product,User,Cart } from '../interface/user';


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

  deleteProduct(productId: Number): Observable<Product[]> {
    return this.http.delete<Product[]>(this.apiUrl+'/product/'+productId)
  }

  getTotal(profileId: Number){
    return this.http.get(this.apiUrl+'/cart/checkout/'+profileId)
  }

  loginUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl+'/login',user)
  }

  postUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl+'/profile',user)
  }
  
  postToCart(product: Cart): Observable<Cart[]> {
    return this.http.post<Cart[]>(this.apiUrl+'/cart',product)
  }
  getCartProduct(profileId: Number): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl+'/cart/'+profileId)
  }

  deleteCartProduct(productId: Number): Observable<Cart[]> {
    return this.http.delete<Cart[]>(this.apiUrl+'/cart/'+productId)
  }

  increaseCartProduct(product: Cart): Observable<Cart[]> {
    return this.http.post<Cart[]>(this.apiUrl+'/cart/increase',product)
  }
  decreaseCartProduct(product: Cart): Observable<Cart[]> {
    return this.http.post<Cart[]>(this.apiUrl+'/cart/decrease',product)
  }

}
