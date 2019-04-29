import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value)
    return null;
    let prepositions=["of","the"];
 let words=value.split(' ');
 console.log(words.length);
 for(var i=0;i<words.length;i++)
 {
if(i>0 && prepositions.includes(words[i].toLocaleLowerCase()))
{
  words[i]=words[i].toLocaleLowerCase();

}
else
{
  words[i]=words[i].substr(0,1).toUpperCase()+words[i].substr(1).toLocaleLowerCase();

}



 }

 return words.join(' ');
  }

}
