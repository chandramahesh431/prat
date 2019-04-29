import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {  

  //  Observable.combineLatest([this.route.paramMap,this.route.queryParamMap]).map(comb=>{
  //   let _id=comb[0].get("id");
  //   let _page=comb[0].get("page");
  //      return {id:_id,page:_page};
  //  })
  //  .subscribe(obj=>{
  //   //  let id=combined[0].get("id");
  //   //  let page=combined[0].get("page");
  //   // console.log(id+"  "+page);
  //   console.log(obj)
  //  })


  
  this.route.paramMap.subscribe(params=>{console.log("id is:",params.get("id"))});
  //console.log(this.route.paramMap["id"]);
  
  this.route.queryParamMap.subscribe(queryparams=>{console.log("page is: ",queryparams.get("page"))});
  //console.log(this.route.paramMap["id"]);
  }
  

}
