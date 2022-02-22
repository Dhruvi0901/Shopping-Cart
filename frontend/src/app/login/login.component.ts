import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { ProfileService } from '../service/profile.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  login(){

    this.profileService.loginUser(this.user).subscribe((res)=>{
      this.user = res as User;

      console.log(this.user.role)
      if(this.user.role == 'Admin'){
        this.router.navigate(['/admin'])


      }else if(this.user.role == 'User'){
        this.router.navigate(['/display'])

      }else{
        alert('Invalid UserId or Password')
      }
     
    })
  }
}
