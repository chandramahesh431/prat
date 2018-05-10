import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

@Input() LikesCount:number;
@Input() isActive:boolean;

HeartClick()
{
  this.LikesCount+=(this.isActive)?1:1;
 this.isActive=!this.isActive;
}

}
