import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  
  user = new User();



  roles = ['','Admin','User'];

  constructor() { }

  ngOnInit(): void {
  }

}
