import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Observable, Observer} from 'rxjs';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//let cirle=document.getElementById('circle');
let c=[10,20,30];
let ober=Observable.fromEvent(document,'mousemove').map(
(e:MouseEvent)=>{
  
  return {x: e.clientX, y: e.clientY};
  
}
).filter(val=>val.x<500).delay(300);

//from(c).map(val=>val*10).filter(val=>val>100);



class MyObserver implements Observer<number>{

  next(value){
  //  console.log(`value1 ${value}`);
  }
  error(e){

   // console.log(e);

  }
  complete(){

 //   console.log('completed');

  }



}

//ober.subscribe(new MyObserver());

ober.subscribe(
  
  (val)=>{mover(val)});


//ober.map(val=>val*100).filter(val=>val>1000);

function mover(value):void{
//console.log('calling '+value.x+" y "+value.y);
//  cirle.style.left=value.x;
  //cirle.style.right=value.y;
  
}