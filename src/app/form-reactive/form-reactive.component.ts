// Thêm ReactiveFormsModule trong module
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// dùng form builder để rút gọn form group và form Control
// new FormGroup= formBuilder.group , new FormControl = "";
//Validator : import validators trong @angular/forms

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  formReacttive : FormGroup;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(){
    this.formReacttive = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      object: this.formBuilder.group({
        nam: true,
        nu: false
      })
    });
  }
  onSubmit(){
    console.log(this.formReacttive.value);
  }

}
