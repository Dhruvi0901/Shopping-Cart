import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/user';
import { ProductserviceService } from '../service/productservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

product = new Product();
 public profileId : Number | undefined;


  constructor(private productService: ProductserviceService, private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params=>{
      this.profileId = Number(params['admin'])
    })
   }

  ngOnInit(): void {
  }

  saveData(){
     this.product.profileId = this.profileId 
    this.productService.postProduct(this.product).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/admin/'+this.profileId])
      console.log(this.profileId);

    })
  }

}





