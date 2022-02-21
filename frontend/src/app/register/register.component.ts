import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user = new User();
  roles = ['','Admin','User'];

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){

    this.registerService.postUser(this.user).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/'])
    })
  }
}
