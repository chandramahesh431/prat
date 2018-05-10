import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
isExpanded:boolean=true;
item={title:"Shipping Details",body:"course details"}

toggle()
{
  this.isExpanded=!this.isExpanded;

}


}
