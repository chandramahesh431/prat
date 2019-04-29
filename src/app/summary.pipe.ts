import {Pipe,PipeTransform  } from '@angular/core';

@Pipe({name:"summary"})
export class SummaryPipe implements PipeTransform
{

transform(value:string,limitto?:number){
if(!value) return null;

return value.substr(0,limitto?limitto:50)+".....";


}


}