import { Component } from '@angular/core'; 

@Component({
    templateUrl: './word.component.html',
    selector: 'app',
    styleUrls: ['./word.component.css'],
})

export class WordComponet {
    header= 'HELLO';
    body= 'VN';
    imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
    forgot = false;

    Show() {
        this.forgot = !this.forgot;
    }
};