import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, LimitTo?: number): any {
    if(!value) return null;

    let actualLimit=(LimitTo) ? LimitTo : 10;

    return value.substr(0,actualLimit)+'....';


  }

}
