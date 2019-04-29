import { ErrorHandler } from "@angular/core";
import { appError } from "./appError";
import { Error404 } from "./Error404";


export class myhandleErrorGlobally implements ErrorHandler
{


  
    handleError(error:appError){
    
        if( error instanceof Error404)
        {
          //  alert("mahi");
        alert("The post already deleted...");
            
        }
        else{
            alert("Generic Error message");
            console.log("error message:",error);
        }
      
    }
}