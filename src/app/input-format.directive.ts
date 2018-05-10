import { Directive,HostListener,ElementRef ,Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el:ElementRef) { }

@Input("appInputFormat")format:string;

@HostListener("blur")mouseOut()
{
  let str:string=this.el.nativeElement.value;
  this.el.nativeElement.value= this.format=='upper'? str.toUpperCase():str.toLowerCase();
}


}
