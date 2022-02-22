import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'product',
  component: ProductComponent
},
{
  path: 'display',
  component: DisplayComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'admin',
  component: AdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
