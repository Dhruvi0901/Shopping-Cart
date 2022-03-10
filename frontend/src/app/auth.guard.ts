import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { ProductserviceService } from './service/productservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private _authService: ProductserviceService) { }

    canActivate(): boolean {
      if (this._authService.loggedIn()){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }      
    }
}
  
