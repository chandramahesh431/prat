import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {AuthService} from '../common/auth.service'

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authG:AuthService,private _router:Router) { }

  canActivate() {
    console.log('fired');
    //debugger;
    this._router.navigate(['/login']);
    return false;
}  
}
