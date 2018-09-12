import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from './weather.service';
// import { TempweatherComponent } from '../tempweather/tempweather.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
}) 

// Output
export class WeatherComponent implements OnInit {   
  txtCity = ''
  cityName = '';
  temp = null;
  @Output() myClick = new EventEmitter();

  constructor( private weatherService: WeatherService ) {}
  ngOnInit() {}
  onShow(){
    
    this.weatherService.getData(this.txtCity)
    .then(temp => {
        this.cityName = this.txtCity;
        this.temp = temp;
        this.txtCity='';
        this.myClick.emit(temp) //thuc thi sự kiện
        // console.log(temp)
    })
    .catch(err=>{
      console.log(err);
      this.cityName='';
      this.txtCity='';
     
    })
  }

}
