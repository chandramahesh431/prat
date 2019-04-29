import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'farvorite',
  templateUrl: './farvorite.component.html',
  styleUrls: ['./farvorite.component.css']
})
export class FarvoriteComponent implements OnInit {

@Input() isFavorite:boolean=false;
@Output() FavoriteClick=new EventEmitter();
  toggleclick(){

    this.FavoriteClick.emit({newValue:this.isFavorite});
this.isFavorite=!this.isFavorite;
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface farvoriteInputType
{
  newValue:boolean;
}