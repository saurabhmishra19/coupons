import {HttpRequestService} from './HttpRequest.service';
import {Injectable} from '@angular/core';
import {HttpRequest, HttpErrorResponse,HttpResponse} from '@angular/common/http';

@Injectable()
export class LoginService{

constructor(private _httpClient: HttpRequestService){
}
    loginService(user:string,pass:string):void{
        let bodyString = JSON.stringify('{username:'+user+', password:'+pass+'}');
        /*let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', 'saurabh');
        urlSearchParams.append('password', 'password');
        
        let body = urlSearchParams.toString()
        */  
  


        var url='http://epinhydw0423.princeton.epam.com:8080/user/login';
        var reqBody={'username':user, 'password':pass};

        console.log("Body :: "+bodyString);
        var val=this._httpClient.post(url,JSON.stringify(reqBody)).subscribe(
    resp => {
    // Here, resp is of type HttpResponse<MyJsonData>.
    // You can inspect its headers:
    console.log('response getting from the'+resp.headers.get('Authorization'));
    // And access the body directly, which is typed as MyJsonData as requested.
    
    
    },error=>this.handleerror(error));

        


    }

    handleerror(error: HttpErrorResponse){
        console.log('getting server error: '+error.message)


    }


}