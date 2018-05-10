
import { JwtHelper} from 'angular2-jwt';



export class AuthService
{

    constructor(){}

VerifyUser(username:string,passwor:string):any
{

 let   token:string='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOiJhZG1pbiJ9.FKPzO9hhjUvgh5XW4EkgYS2PDJyelAqMx18DuZOv5_A';
if(username==="admin" && username==="admin")
{

return token;


}
else
{

    return null;
}

function isLoggedIn():boolean
{


return true;
}




}




}