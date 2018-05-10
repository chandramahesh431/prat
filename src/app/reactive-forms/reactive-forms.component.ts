import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms'
import { usernameValidator } from '../reactive-forms/username.validator';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

form=new FormGroup({
username:new FormControl('',[usernameValidator.cannotContainsSpace,Validators.required,Validators.minLength(5)]),
password:new FormControl('',[Validators.required,,Validators.minLength(5)])
});

login():void
{
        if(this.form.value.username==="admin" && this.form.value.password==="admin")
        {
        alert('sucess');

        }
        else
        {
          this.form.setErrors({invalidLoggedIn:true});  
          
        }
}


}
