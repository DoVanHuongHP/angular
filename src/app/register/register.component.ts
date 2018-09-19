import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ passValidator } from './validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReactive : FormGroup;
  image : File;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(){
    this.formReactive = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirm: ['',[Validators.required,passValidator]],
      img: ['',[Validators.required]],
      gender :[],
      hobby:this.formBuilder.group({
        game: false,
        sport: false,
        readingbook: false,
        travel: true
      })
    });
    this.formReactive.controls.password.valueChanges
    .subscribe(x=>this.formReactive.controls.confirm.updateValueAndValidity())
  }
  onSubmit(){
    console.log(this.formReactive.value);
  }

}
