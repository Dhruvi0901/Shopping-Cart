import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  postUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl+'/login',user)
  }


}
