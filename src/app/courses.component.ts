import {Component} from '@angular/core';


@Component({
selector:'courses',
templateUrl:'./courses.component.html'
})
export class CoursesComponent
{
   course={
        title:"Please complete the angular course",
        students:32098,
        cost:2387,
        startdate:new Date(2016,3,2)
          }

}