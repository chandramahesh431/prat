import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import { appError } from '../common/appError';
import { Error404 } from '../common/Error404';
import { Error400 } from '../common/Error400';

@Injectable()
export class dataService {
//private Url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private Url:string,private http:Http) { }

getAll()
{
 return this.http.get(this.Url).catch(this.handleError);
}
create(resource)
{
return  this.http.post(this.Url,JSON.stringify(resource)).catch(this.handleError);
}
update(resource)
{
 return this.http.patch(this.Url+"/"+resource.id,JSON.stringify({title:"test"})).catch(this.handleError);
}
delete(id)
{
return this.http.delete(this.Url+"/"+id).catch(this.handleError);
}

private handleError(error:Response)
{
  if(error.status===400)
  {
    return Observable.throw(new Error400());
  }
  else if(error.status===404)
  {
    return Observable.throw(new Error404());
  }
  else
  {
    return Observable.throw(new appError(error));
  } 
}
}

