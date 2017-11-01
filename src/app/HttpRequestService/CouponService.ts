
import {ICoupons} from './ICoupons';
import{HttpRequestService} from './HttpRequest.service';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
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
    return this.getCoupons();
    
    //this.http.get('http://10.71.12.144:8081/coupon/all')
      //                .map(res => res.json());
      }


getCoupons():Observable<Coupon[]>{
let url='http://10.71.12.144:8081/coupon/all'
let values : Observable<Coupon[]>;
 values=this._httpRequestService.getmethod(url);
 values.map(val=>(console.log('new caller of the values '+val)));
 values.map(val=>console.log('mapping val: '+val.forEach(t=>console.log('id of th '+t.id))))
 .subscribe(
    data=>{
    console.log('getcoupons--'+data)
    });
return values;

}

saveCoupon(coupon :ICoupons):ICoupons{
    let url = 'http://10.71.12.144:8081/coupon';
    this._httpRequestService.postContentDefault(url,JSON.stringify(coupon)).subscribe(
    data=>{console.log("data in"+data);this.icoupon=data
    console.log(this.icoupon.id)
    });

  return this.icoupon;




}

deleteCoupon(id:string):void{
 let url = 'http://10.71.12.144:8081/coupon/'+id;
  this._httpRequestService.deleteMethod(url);
}




}