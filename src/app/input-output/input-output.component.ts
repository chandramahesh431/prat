import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

@Input("username")
username:string;

@Input("password")
password:string;

@Output("Btnclick")
Btnclick=new EventEmitter();

textChange()
{

  this.Btnclick.emit({username:this.username,password:this.password});
}

}
