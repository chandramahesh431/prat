import {  Http,Response } from "@angular/http";
import 'obsersable/subscribe';
import 'rxjs/add/operator/catch';
import { Observable} from 'rxjs/observable';
import 'rxjs/add/observable/throw';
import { ErrorHandler } from "@angular/core";



export class dataservice 
{
    private url;
constructor(private _http:Http){}

getALL()
{
return  this._http.get(this.url).catch((error:Response)=>{ return Observable.throw(new errorhand); })

}



}

export class errorhand implements ErrorHandler
{

handleError(error:Response)
{

}

}