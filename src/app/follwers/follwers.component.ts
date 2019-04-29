import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follwers',
  templateUrl: './follwers.component.html',
  styleUrls: ['./follwers.component.css']
})
export class FollwersComponent implements OnInit {

  constructor(private _route:Router) {  }

  ngOnInit() {
  }

  btnclick(){

    this._route.navigate(["/followers",1234],{queryParams:{page:1,order:'oldest'}});

  }

}
