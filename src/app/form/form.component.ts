import { Component, OnInit } from '@angular/core';
import {FormService} from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form){
    console.log(form)
  }

 

}
