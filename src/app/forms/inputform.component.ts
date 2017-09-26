import { Component }              from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'inputform',
  templateUrl: './inputform.component.html'
})

export class FormControlComponent{
 heroForm = new FormGroup ({
    name : new FormControl('',Validators.required)
    , age : new FormControl(),
     passwors: new FormControl("abc123")


 });
;

}