import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {

  form=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    password:new FormControl('',Validators.required)
  }
  )

  get username()
  {
    return this.form.get('username');
  }
  constructor() { }

  ngOnInit() {
  }

}
