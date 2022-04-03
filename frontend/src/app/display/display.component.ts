import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { Product } from '../interface/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public profileId: Number 
  products:  Product[];

  userName:any;
  addedInCart=false;
  
  constructor(private productService: ProductserviceService, private route: ActivatedRoute, private cartService: ProductserviceService) {
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

    this.productService.getUser(this.profileId).subscribe((res)=>{
      this.userName = res[0]['name'];
    })

  }

  addToCart(productId: any){
   let product = {
      "profileId": this.profileId,
      "productId": Number(productId)
    } 

    this.cartService.postToCart(product).subscribe((res)=>{
      console.log("item added to cart:" )
    })

  }

  checkInCart(productId: any){
    let product = {
      "profileId": this.profileId,
      "productId": Number(productId)
    }
    this.cartService.checkInCart(product).subscribe((res)=>{
      if(res){
        console.log(res)
        this.addedInCart=true;
      }
    })

  }


  

}
