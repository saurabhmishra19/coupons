import {Component,OnInit} from '@angular/core';
import {CouponService} from '../HttpRequestService/CouponService';
import {LoginService} from '../HttpRequestService/LoginService';
@Component({
    selector:'app-body',
    templateUrl:'body.component.html'


})

export class BodyComponent implements OnInit{

    constructor(private _couponService: CouponService,private _loginService :LoginService){
    }

    val():void{


        console.log( "this is the caller"+this._couponService.getCoupons());
    }

    

    ngOnInit():void{
        console.log('calling on init');

          //  this.val();
            this._loginService.loginService('saurabh','password');

    }


}


