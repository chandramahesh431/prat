import { Component, OnInit } from '@angular/core';
import { JwtHelper} from 'angular2-jwt'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
 
  }



 

  //res:string=new JwtHelper().decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOiJhZG1pbiJ9.FKPzO9hhjUvgh5XW4EkgYS2PDJyelAqMx18DuZOv5_A');
  
  name:string=new JwtHelper().decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOiJhZG1pbiJ9.FKPzO9hhjUvgh5XW4EkgYS2PDJyelAqMx18DuZOv5_A').name;


   atertest():any{

console.log(new JwtHelper().decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOiJhZG1pbiJ9.FKPzO9hhjUvgh5XW4EkgYS2PDJyelAqMx18DuZOv5_A'));

  }
    
 
}
