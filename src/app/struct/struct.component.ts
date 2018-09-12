import { Component, OnInit } from '@angular/core';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  fillterData = "all";
  isShow = true;
  showForm = true;
  txtname = "";
  txtaction = "";
  txtstart = false;
  arr = [
    { id: 1, name: 'Nodejs', action: 'study E-Learning', start: true },
    { id: 2, name: 'Angular', action: 'study E-Learning', start: true },
    { id: 3, name: 'PHP', action: 'study E-Learning', start: true },
    { id: 4, name: 'Laravel', action: 'study E-Learning', start: true },
    { id: 5, name: 'React-native', action: 'study E-Learning', start: false },
    { id: 6, name: 'AI', action: 'study E-Learning', start: false }
  ];
  constructor() { }


  ngOnInit() {
  }

  add() {
    this.arr.push({
      id: this.arr.length + 1,
      name: this.txtname,
      action: this.txtaction,
      start: this.txtstart
    });

    this.txtname = '';
    this.txtaction = '';
    this.showForm = false;
  }


  Delete(Id: number) {
    const index = this.arr.findIndex(x => x.id === Id);
    this.arr.splice(index, 1);
  }


  // selectAction(start: boolean) {
  //     const allObject = this.fillterData ==='all';
  //     const studyObject = this.fillterData === 'study' && start;
  //     const readObject = this.fillterData === 'read'  && !start;
  //     return allObject || studyObject || readObject;
  // }


}
