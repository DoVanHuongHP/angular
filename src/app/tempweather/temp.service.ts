import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()

export class TempService {
    constructor(private http: Http){}

    getData( cityName: string){
        const url='https://api.openweathermap.org/data/2.5/find?appid=5bef7a671112fcef400464aceec7cfc4&units=metric&q='+cityName;
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJson =>resJson.list[0].main.temp);
       
    }
}