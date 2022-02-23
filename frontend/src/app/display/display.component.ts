import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { Product } from '../interface/user';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public profileId: Number 
  products:  Product[];
  
  constructor(private productService: ProductserviceService, private route: ActivatedRoute, private cartService: CartService) {
    this.profileId = (Number(this.route.snapshot.paramMap.get('profileId'))) 
    this.products = [];
   }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProduct().subscribe((res)=>{
      this.products = res;
    })
  }

  addToCart(productId: any){

   let product = {
      "profileId": this.profileId,
      "productId": Number(productId)
    } 

    this.cartService.postToCart(product).subscribe((res)=>{
      console.log("item added to cart:" + res)
    })

  }

  

}
