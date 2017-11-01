import {Component, OnInit,OnChanges} from '@angular/core';
import { CouponService } from "../HttpRequestService/CouponService";
import {Coupon} from '../HttpRequestService/CouponModel';

@Component({
selector:'listValues',
templateUrl:'./listcoupons.component.html'

})

export class ListAllCoupons implements OnInit,OnChanges{

constructor(private _couponService :CouponService){
}
coupons: Coupon[] = [];
ngOnInit(){
console.log('change');
    this.getData();


}
ngOnChanges(){
console.log('change');
    this.getData();


}
getData(){

this._couponService.getCouponsOld ()
      .subscribe(coupons =>
           {
              this.coupons = coupons;
              console.log("val "+JSON.stringify(this.coupons));
          },
          (error) => console.log('error '+error)
      );


}
delete(id:string){

console.log(id);
this._couponService.deleteCoupon(id);
}

}
