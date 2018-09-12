import { Component, OnInit } from '@angular/core';
import {  LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService ],
})
export class LoginComponent implements OnInit {
  data=[];
  constructor( private loginService: LoginService ) { }

  ngOnInit() {
  }
  onSubmit(formLogin){
    this.loginService.postData(formLogin.value)
    .then(result => console.log(result))
    .catch(err=>console.log(err))
  }

  onShow(){
    this.loginService.getData()
    .then(result =>  this.data= result)
    .catch(err => console.log(err))
  }

  Edit(Id){
    const item = this.data.fill(x => x.id == Id)
  }



  Delete(Id){
    const item = this.data.findIndex(x=> x.id == Id)
    this.data.splice(item,1);
  }

}
