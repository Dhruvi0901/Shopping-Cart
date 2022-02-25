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

  product: Product = new Product();
  public profileId: Number | undefined;
  public productId!: Number;
  public updateBtn = "none";
  public saveBtn = "inline";


  constructor(private productService: ProductserviceService, private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      this.profileId = Number(params['admin'])
    })

    this.route.queryParams.subscribe(params => {
      this.productId = Number(params['editId'])
    })
  }
  ngOnInit(): void {
    if (this.productId >= 1) {
      this.fillData()
    }
  }

  saveData() {
    this.product.profileId = this.profileId
    this.productService.postProduct(this.product).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/admin/' + this.profileId])
      console.log(this.profileId);

    })
  }
  fillData() {
    this.productService.getEditProduct(this.productId).subscribe((res) => {
      this.product = res as Product;
      console.log(this.product);
      this.saveBtn = "none";
      this.updateBtn = "inline";

    })
  }

  updateData(){
    this.productService.putEditProduct(this.productId, this.product).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/admin/' + this.product.profileId])
    })



  }

}





