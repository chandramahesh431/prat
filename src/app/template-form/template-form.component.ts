import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent  {

  contactMethods=[{id:1,name:"phone"},{id:2,name:"mail"}]
  Submit(f)
  {

    console.log(f.value);
  }

  log(x)
  {

    console.log(x)
  }
}
