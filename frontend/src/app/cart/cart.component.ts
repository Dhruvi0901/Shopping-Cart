import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/user';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public profileId!: Number; 
  cartProducts: Product[] = []

  constructor(private route: ActivatedRoute, private cartService: CartService) {

    this.route.queryParams.subscribe(params=>{
      this.profileId = Number(params['user'])
      this.cartProducts = []
    })
   }

  ngOnInit(): void {
    this.getCartProduct()
  }

  getCartProduct(){
    this.cartService.getCartProduct(this.profileId).subscribe((res)=>{
      this.cartProducts = res
      console.log(res)
    })
  }

}
