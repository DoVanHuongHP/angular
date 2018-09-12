import {Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class Service {
    constructor(private http:Http){}
    getData(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.title)
       
    }
}