import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { WeatherComponent} from '../weather/weather.component';


@Component({
  selector: 'app-tempweather',
  templateUrl: './tempweather.component.html',
  styleUrls: ['./tempweather.component.css']
})
export class TempweatherComponent implements OnInit {
  // @Input() nameCity: string;
  @Input() temp: null;

  constructor() { }

  ngOnInit() {
  }

  onChange(event){
    // console.log(event);
    this.temp = event;
    // this.nameCity= event.
    
  }

}


