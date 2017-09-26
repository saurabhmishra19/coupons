
import {ICoupons} from './ICoupons';
import{HttpRequestService} from './HttpRequest.service';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
@Injectable()
export class CouponService{

icoupon:ICoupons;

constructor(private _httpRequestService:HttpRequestService)
{

}

getCoupons():void{

 this._httpRequestService.getmethod("coupons.json").subscribe(
    data=>{console.log("data in"+data);this.icoupon=data
    console.log(this.icoupon.id)
    });
}

saveCoupon(coupon :ICoupons):void{
    let url = 'http://10.71.13.3:8080/coupon';
    this._httpRequestService.postContentDefault(url,JSON.stringify(coupon)).subscribe(
    data=>{console.log("data in"+data);this.icoupon=data
    console.log(this.icoupon.id)
    });

 




}




}