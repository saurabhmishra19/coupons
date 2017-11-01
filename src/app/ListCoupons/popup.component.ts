import {Component} from '@angular/core';


@Component({

selector:"popup",
templateUrl:'./popupcomponent.html',
styleUrls:['./popupcomponent.css']


})

export class PopupComponent{

    isVisible:boolean=false;
    selectedDivId:string;

    displayPopup(id:string):void{



    }



}
