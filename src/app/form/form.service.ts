import {Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class FormService {
    constructor(private http:Http){}
    getData(){
        const url='https://jsonplaceholder.typicode.com/posts'
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJson => console.log(resJson));
    }

    postData(value){
        const url='https://jsonplaceholder.typicode.com/posts'
        const headers= new Headers ({'Content-Type':'application/json'});
        const body= JSON.stringify(value)
        return this.http.post(url,body,{headers})
        .toPromise()
        .then(res => res.json())
        .then(resJson => console.log(resJson));
    }
}