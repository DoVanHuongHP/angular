import {Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class LoginService {
    constructor(private http:Http){}

    postData(value){
        const url='https://jsonplaceholder.typicode.com/users'
        const headers= new Headers ({'Content-Type':'application/json'});
        const body= JSON.stringify(value)
        return this.http.post(url,body,{headers})
        .toPromise()
        .then(res => res.json())
    }

    getData(){
        const url='https://jsonplaceholder.typicode.com/users'
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson);
    }
}