import {AbstractControl, ValidationErrors } from "@angular/forms";

export class usernameValidator
{
 
    static cannotContainsSpace(control:AbstractControl) :ValidationErrors | null
    {
        console.log("firrrr");

        if((control.value as string).indexOf(' ')>=0)
        {

            return {cannotContainsSpace:true };
        }
        else null;
    }


}