import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-examples',
  templateUrl: './directive-examples.component.html',
  styleUrls: ['./directive-examples.component.css']
})
export class DirectiveExamplesComponent implements OnInit {
viewMode:string="map";

  addcourse(){
this.courses.push({name:"course4"});

  }
  removecourse(course){
let ind=this.courses.indexOf(course);
this.courses.splice(ind,1);

  }
  courses=[{name:"course1"},{name:"course2"},{name:"course3"}]

  constructor() { }

  ngOnInit() {
  }

}
