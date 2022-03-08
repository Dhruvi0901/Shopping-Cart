import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/user';
import { ProductserviceService } from '../service/productservice.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public profileId: Number
  Product: Product[] = []

  adminName:any;

  constructor(private route: ActivatedRoute, private productService: ProductserviceService) {
    this.profileId = (Number(this.route.snapshot.paramMap.get('profileId')))
  }

  ngOnInit(): void {
    this.getAdminProducts()
    console.log(this.profileId)
  }

  getAdminProducts() {
    this.productService.getAdminProduct(this.profileId).subscribe((res) => {
      this.Product = res;
      console.log(this.Product)
    })

    this.productService.getUser(this.profileId).subscribe((res)=>{
      this.adminName = res[0]['name'];
    })
  }

  delProduct(productId: any) {
    productId = Number(productId)
    if (confirm("Are you sure to Delete")) {
      this.productService.deleteProduct(productId).subscribe((res) => {
        console.log(res)
        this.ngOnInit();
      })
    }


  }

}



