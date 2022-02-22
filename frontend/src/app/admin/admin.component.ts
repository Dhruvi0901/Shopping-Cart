import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( ) {
   
   }

   products: Product[] = []

//  products = new Product();

  ngOnInit(): void {
  }

  delProduct(){

  }

  updateProduct(){
    
  }

}
