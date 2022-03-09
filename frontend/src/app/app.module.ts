import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DisplayComponent } from './display/display.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    DisplayComponent,
    AdminComponent,
    CartComponent,
    PlaceorderComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
