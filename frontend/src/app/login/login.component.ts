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

    this.profileService.postUser(this.user).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/'])
    })
  }
}
