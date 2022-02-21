import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/user';
import { ProductserviceService } from '../service/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = new Product();
  

  constructor(private productService: ProductserviceService,  private router: Router) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  saveData(){

    this.productService.postProduct(this.product).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/'])
    })

    

  }

}
