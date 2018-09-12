import { Component, OnInit } from '@angular/core';
import { Service } from './ip.service'

@Component({
  selector: 'app-ipservice',
  templateUrl: './ipservice.component.html',
  styleUrls: ['./ipservice.component.css'],


  //nếu Service được gọi ở nhiều component sử dụng thì ta khai báo providers ở trong app.module.ts 
  providers: [Service]
})
export class IPserviceComponent implements OnInit {
  title : string;
  constructor(private _service: Service) { }

  ngOnInit() {
    this._service.getData()
    .then(title => this.title = title)
    .catch(err => console.log(err));
  }

}
