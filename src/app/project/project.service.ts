import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from '../../../node_modules/rxjs';


@Injectable()

export class ProjectService {
    data: any[];
    constructor(private http: Http) { }

    getData() {
        const url = 'https://jsonplaceholder.typicode.com/comments?postId=1'

        return new Promise((resolve, reject) => {
            return this.http.get(url).subscribe(
                (data => {
                    resolve(data.json());
                    console.log(data.json());
                }),
                err => reject(err)
            )
        })
    }
    getData1(){
        const url = 'https://jsonplaceholder.typicode.com/comments?postId=1'
        return new Observable(observable => {
            return this.http.get(url).subscribe(
                (data => {
                   observable.next(data.json());

                }),
                err=>observable.error(err),
            )
        })
    }

    getDataUser() {
        const url = 'https://jsonplaceholder.typicode.com/posts?userId=1'
        return new Promise((resolve, reject) => {
            return this.http.get(url).subscribe(
                (data => {
                    resolve(data.json());
                }),
                err => reject(err)
            )
        });
    }

    getDataUser1(){
        const url = 'https://jsonplaceholder.typicode.com/posts?userId=1'
        return new Observable( observable => {
            return this.http.get(url).subscribe(
                (data =>{
                    observable.next(data.json());
                }),
                err => observable.error(err)
            )
        });
    }

    getPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        return new Promise((resolve, reject) => {
            return this.http.get(url).subscribe(
                (data => {
                    resolve(data.json());
                }),
                err => reject(err)
            )
        });
    }


    getPosts1() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        return new Observable( observable => {
            return this.http.get(url).subscribe(
                (data=>{
                    observable.next(data.json());
                }),
                err => observable.error(err)
            )
        })
        
    }

    getPut() {
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        return new Promise((resolve, reject) => {
            return this.http.get(url).subscribe(
                (data => {
                    resolve(data.json());
                    // console.log(data.json());

                }),
                err => reject(err)
            )
        });
    }

    getPut1(){
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        return new Observable(observable=>{
            return this.http.get(url).subscribe(
                (data=>{
                    observable.next(data.json());
                }),
                err=> observable.error(err)
            )
        });
    }

    getPatch() {
        const url= 'https://jsonplaceholder.typicode.com/posts/1'
        return new Promise((resolve, reject)=>{
            return this.http.get(url).subscribe(
                (data=>{
                    resolve(data.json());
                }),
                err => reject(err)
            )
        });
    }

    getPatch1() {
        const url= 'https://jsonplaceholder.typicode.com/posts/1'
        return new Observable( observable =>{
            return this.http.get(url).subscribe(
                (data=>{
                    observable.next(data.json());
                }),
                err=> observable.error(err)
            )
        });
    }
}