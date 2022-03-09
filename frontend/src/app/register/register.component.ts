import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { ProductserviceService } from '../service/productservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user = new User();
  roles = ['Admin','User'];

  constructor(
    private registerService: ProductserviceService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    

    this.registerService.postUser(this.user).subscribe((res)=>{
      console.log(res)
      if(res){
      this.toastr.success("You have created account Please LogIn")
      this.router.navigate(['/login'])
      }
      else{
        this.toastr.error("Email or Mobile Already Used.")
      }
    })
  }
}
