import { Component } from '@angular/core';
import {farvoriteInputType} from './farvorite/farvorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  main_tweet={body:"---",likescount:100,isActive:true}
  hostevent(isFavorite:farvoriteInputType)
  {
console.log("host event fired...",isFavorite.newValue);

  }
 
  CummunivationsMethods=[{id:1,name:"Email"},{id:2,name:"phone"}];
  viewMode:string="map";
  courses=[{id:1,name:"course1"},{id:2,name:"course2"},{id:3,name:"course3"}];
tweets={LikesCount:10,IsActive:true};

 review={name:"exam1",assign:{name:"mahesh"}};

items=[{title:"Shipping Details",body:"Shipping"},{title:"Billing Details",body:"Billing"}];
  WelcomeText = 'Welcome to Angular2';
 username:string="chandra";
 password:string="mahesh";
 
  parentevent(eventArgs)
  {
    this.username=eventArgs.username;
    console.log("Username:",eventArgs.username);
    console.log("Password:",eventArgs.password);
  }



  log(str)
  {
console.log(str);

  }
  addCourse()
  {

    this.courses.push({id:4,name:"course4"});
  }
  updateCourse(course)
  {
    course.name="updated";

  }
removeCourse(course)
{
 let index=this.courses.indexOf(course);
 this.courses.splice(index,1);

}

}

export class Person
{
username:string;
password:string;

}