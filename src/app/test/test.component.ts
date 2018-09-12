import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name:string='';
  isHighLight=true;
  odd={
    color: 'blue', 
    fontSize: '40px'
  };
  even= {
      color: 'red', 
      fontSize: '20px'
  }
  currentHighLight= {
    circle: !this.isHighLight, square: this.isHighLight 
  }
  constructor() { }
  //OnInit : lifecycle hock
  //chạy sau constructor 
  // lấy data server, khoi tao gia tri cho thuoc tinh component
  ngOnInit() {
  }
  

}
