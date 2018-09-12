import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'app-parent',
    template: `
        <button (click) = "onAdd();">Add value</button>
        <app-child></app-child>
    `
})

export class ParentComponent {
    @ViewChild( ChildComponent)

    myChild : ChildComponent ;

    onAdd(){
        this.myChild.value++;
    }
  

}
