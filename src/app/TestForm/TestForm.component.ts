import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import {Component,OnChanges} from '@angular/core'

@Component({
selector:'testform',
templateUrl:'./TestForm.component.html'
})

export class TestForm implements OnChanges{
    testForm:FormGroup;

constructor(private _fb:FormBuilder){
    this.createTestForm();


}
createTestForm():void{
this.testForm=this._fb.group({
    name:['', [Validators.required , Validators.minLength(10)]],
    id:['',[Validators.required, Validators.minLength(5)]],
    age:'',
    indian:true,
    place:''
});


}

ngOnChanges():void{

console.log('trigger');

}


changeCounty(changeValue:boolean):void{

console.log('changed value');

}


save(){
console.log('abc');

}
test(){
    console.log('test');
}

testvalues(){
    this.testForm.setValue({
        name: 'FirstName LastName',
        id:123,
        age:'23',
        indian:true,
        place:'Delhi'
    });
}



}


