
import {ICoupons} from './ICoupons';
import{HttpRequestService} from './HttpRequest.service';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { Coupon } from "./CouponModel";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
@Injectable()
export class CouponService{

icoupon:ICoupons;
icouponList:ICoupons[];
constructor(private _httpRequestService:HttpRequestService,private http: Http)
{

}

getCouponsOld (): Observable<Coupon[]> {
    return this.http.get('http://10.71.12.144:8081/coupon/all')
                      .map(res => res.json());
      }


getCoupons():void{
let url='http://10.71.12.144:8081/coupon/all'
 this._httpRequestService.getmethod(url).subscribe(
    data=>{console.log("data in"+data);this.icouponList=data
    console.log('getcoupons'+this.icouponList.length)
    });
}

saveCoupon(coupon :ICoupons):ICoupons{
    let url = 'http://10.71.12.144:8081/coupon';
    this._httpRequestService.postContentDefault(url,JSON.stringify(coupon)).subscribe(
    data=>{console.log("data in"+data);this.icoupon=data
    console.log(this.icoupon.id)
    });

  return this.icoupon;




}




}