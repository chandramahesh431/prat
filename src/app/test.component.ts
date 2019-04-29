import {Component} from '@angular/core';
import {ChandraService} from './chandra.service'
 

@Component({
selector:'test123',
template:`<h2 [textContent]="title"></h2>{{customerDetails.studentcount | number:'2.2-2'}} {{title | uppercase | lowercase}}
{{summaryText | summary:40}}


<input [(ngModel)]="email"  (keyup)="onkeyup()"/>
<div (click)="onclickdev()">
<button (click)="onclick($event)" class="btn btn-primary" [style.backgroundColor]="isActive?'red':'blue'">Jai Sree Ram</button>
</div>
<table>
<tr>
<td [attr.colspan]="2">
{{customerDetails.studentcount}}</td>
</tr>
</table>

`
})
export class testComponent
{
  summaryText:string="g chandra maheswara reddy jsjfosdf kfjsdfj";
 customerDetails:object={studentcount:23424};

  email:string="gajjalamahesh@gmail.com";
  onkeyup()
  {
    
console.log(this.email);

    


  }
  onclickdev(){
    console.log("onclick pressed...Div")
  }
  onclick($event)
{

console.log("onclick pressed...",$event.type)
} 

isActive:boolean=false;
   obj:ChandraService=new ChandraService("mahesh");
//     constructor(public chservice:ChandraService)
//     {
// //this.courses=chservice.courses;
//     }

    
  title="ANgular Project";
  courses:string[]=this.obj.courses;
  getmethod():string

  {

    return this.title;
  }

}