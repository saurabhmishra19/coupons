import {Component} from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CouponService } from "../HttpRequestService/CouponService";
@Component({
    selector:'createcoupon',
    templateUrl: './createcoupon.component.html',
    styleUrls:['createcoupon.component.css']

})

export class CreateCoupon{
    createForm:FormGroup;
    constructor(private fb:FormBuilder, private _couponService :CouponService){
        this.createcouponForm();
    }
    createcouponForm():void{
        this.createForm= this.fb.group({
           couponTitle: ['', Validators.required ],
           couponDescription:['', Validators.required ],
           value: '',
            creditType: '',
            author: '',
            validTill: '',
            createdDate: '',
            updatedDate: ''
        })

    }

    onsubmitCreateForm():void{

        const formModel = this.createForm.value;

            console.log('values submitted'+JSON.stringify(formModel));

       let res= this._couponService.saveCoupon(formModel);
       console.log('values response'+JSON.stringify(this._couponService.icoupon));
    }

    revert() { this.ngOnChanges(); }
 
ngOnChanges(){
 console.log('test app');



}


}

