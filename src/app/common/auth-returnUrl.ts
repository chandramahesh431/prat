
import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../common/auth.service'

@Injectable()
export  class AuthReturnUrlService implements CanActivate{
constructor(private route:Router)
{


}

canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):any
{
//debugger;
    this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    console.log(state.url);

}


}