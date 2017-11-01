import {FormControlComponent} from './inputform.component';
import {TestBed } from '@angular/core/testing';
describe('Test 1st test case',()=>{

let inputform: FormControlComponent;

beforeAll(()=>{
    TestBed.configureTestingModule({

        declarations:[FormControlComponent]
    })


});

console.log('executing test case');

it('first it',()=>{
expect(true).toBe(true);
console.log('first it');

});


});