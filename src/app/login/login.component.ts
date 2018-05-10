import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {AuthService} from '../common/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authser:AuthService,private _router:Router,private acRoute:ActivatedRoute) { }

  ngOnInit() {

  }

checkUser(credentials)
{
 console.log(credentials);
  //debugger;
 if(this.authser.VerifyUser(credentials.username,credentials.password))
 {
   
let returl=this.acRoute.snapshot.queryParamMap.get('returnUrl');
console.log('fired'+returl);
this._router.navigate([returl || '/']);
return false;
 }
 else
 {
alert("login failed");

 }


}

}
