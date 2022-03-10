import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../interface/user';
import { ProductserviceService } from '../service/productservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private router: Router, 
    private profileService: ProductserviceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(){

    this.profileService.loginUser(this.user).subscribe((res)=>{
      if(res){
        this.user = res as User;
      }
      console.log(this.user.role)

      if(this.user.role == 'Admin'){
        this.router.navigate(['/admin/'+this.user.profileId]);
        localStorage.setItem('token',this.user.token)

      }else if(this.user.role == 'User'){
        this.router.navigate(['/display/'+this.user.profileId])
        localStorage.setItem('token',this.user.token)

      }else{
        this.toastr.error('Invalid UserId or Password')
        this.ngOnInit()
      }
     
    })
  }
}
