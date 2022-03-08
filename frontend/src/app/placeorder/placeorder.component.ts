import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ProductserviceService } from '../service/productservice.service';
import { Placeorder } from '../interface/user';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {


  public profileId!: Number
  //public total: Placeorder= new Placeorder();
  public total = ''


  constructor(private productService: ProductserviceService,
    private route: ActivatedRoute,
    private cartService: CartService) {
      
      this.route.queryParams.subscribe(params=>{
        this.profileId = Number(params['user'])
      })  }

  ngOnInit(): void {
    this.getCartTotal()
  }

  getCartTotal() {
    this.productService.getTotal(this.profileId).subscribe((res:any) => {
      this.total = res;
       console.log(this.total)
    })
  }

}
