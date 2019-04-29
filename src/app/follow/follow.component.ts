import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  btnclick(){

    this._route.navigate(["/followers",1234],{queryParams:{page:1,order:'oldest'}});

  }
}
