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
import {CreateCoupon} from './createcoupon/createcoupon.component';
import {ListAllCoupons} from './ListCoupons/listcoupons.component';
import {Coupon} from './HttpRequestService/CouponModel';
import { HttpModule } from '@angular/http';
import {TestForm} from './TestForm/TestForm.component';
import {PopupComponent} from './ListCoupons/popup.component';

import { BsDatepickerModule } from 'ngx-bootstrap';
import {DemoDatePickerPopupComponent} from './createcoupon/DemoDatePickerPopupComponent'
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, BodyComponent, FormControlComponent, CreateCoupon, ListAllCoupons,TestForm,DemoDatePickerPopupComponent,PopupComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, ReactiveFormsModule,HttpModule,BsDatepickerModule
  ],
  providers: [HttpRequestService, CouponService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
