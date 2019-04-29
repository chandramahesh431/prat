import { Directive,HostListener, ElementRef ,Input} from '@angular/core';

@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {
@Input("appFormatInput") format:string;
  constructor(private el:ElementRef) { }
  @HostListener("blur") onblur()
  {
let value:string=this.el.nativeElement.value;
if(this.format=='lowercase')
this.el.nativeElement.value=value.toLocaleLowerCase();
else
{
  this.el.nativeElement.value=value.toLocaleUpperCase();

}


  }

}
