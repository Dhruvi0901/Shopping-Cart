import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { Product } from '../interface/user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private productService: ProductserviceService) {
    this.products = [];
   }

   products:  Product[];

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProduct().subscribe((res)=>{
      this.products = res;
    })
  }

  

}
