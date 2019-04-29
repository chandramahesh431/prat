import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import {Observable} from 'rxjs/Observable';
// import { appError } from '../common/appError';
// import { Error404 } from '../common/Error404';
// import { Error400 } from '../common/Error400';
import { dataService } from '../common/dataService';

@Injectable()
export class PostsService extends dataService {
//private Url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(http:Http) {
   super("https://jsonplaceholder.typicode.com/posts",http);

   }


}

