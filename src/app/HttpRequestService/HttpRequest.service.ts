import {Injectable} from '@angular/core';
import {HttpClient,HttpRequest, HttpHeaders,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
@Injectable()
export class HttpRequestService{

    constructor(private _http: HttpClient){
    }
    getmethod(url: string) :Observable<any>{
            return this._http.get(url).retry(3).do(data =>{console.log((data.valueOf))});
    }

    defaultHeaders():HttpHeaders{

        return new HttpHeaders().append('responseType','application/json').append('Content-Type','application/json');
    }

    postContentDefault(url:string, body:string):Observable<any>{
          return this._http.post(url, body,{headers:this.defaultHeaders()})
        .do(resHttpResponse=>{console.log('response '+resHttpResponse)}).catch(error=>this.handleError(error)); 
    }
    postContentType(url:string, body:string, headers:HttpHeaders):Observable<any>{
        return this._http.post(url, body,{headers:headers} )
        .do(resHttpResponse=>{console.log('response '+resHttpResponse)}).catch(error=>this.handleError(error));
    }


    post(url:string,body:string ) :Observable<any>{

        
       var headers = new HttpHeaders();
       // headers.append('Content-Type', 'application/json');
         
        return this._http.post(url, body,{headers: headers,observe: 'response',responseType:'text', withCredentials: true} )
        
        
        .do(resHttpResponse=>{console.log('response '+resHttpResponse.headers.get('Authorization'));this.reponseHandle(resHttpResponse)}).catch(error=>this.handleError(error));
          
    }

    reponseHandle(response:HttpResponse<any>){

        console.log('Auth:: '+response.body);

        console.log('Auth:: '+response.headers.keys());
        return response;

    }

    handleError(error:HttpErrorResponse): Observable<HttpErrorResponse>{
        console.log(error.message);
        throw error;
    }



}

