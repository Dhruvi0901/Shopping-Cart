import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'product',
  component: ProductComponent
},
{
  path: 'display/:profileId',
  component: DisplayComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'admin/:profileId',
  component: AdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
