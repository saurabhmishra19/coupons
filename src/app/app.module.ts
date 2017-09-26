import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpRequestService} from './HttpRequestService/HttpRequest.service';
import {BodyComponent} from './body/body.component';
import {CouponService} from './HttpRequestService/CouponService';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './HttpRequestService/LoginService';
import {FormControlComponent} from './forms/inputform.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, BodyComponent, FormControlComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, ReactiveFormsModule 
  ],
  providers: [HttpRequestService, CouponService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
