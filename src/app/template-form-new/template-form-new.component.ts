import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form-new',
  templateUrl: './template-form-new.component.html',
  styleUrls: ['./template-form-new.component.css']
})
export class TemplateFormNewComponent implements OnInit {

  constructor() { }
  submit(f)
  {
console.log(f);

  }
  contactMethods=[{id:1,name:"phone"},{id:2,name:"mail"}];
  ngOnInit() {
  }
  selectedOption:string="mail";
  log(value)
  {

    console.log(value);
  }
}
