import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Observable, observable } from '../../../node_modules/rxjs';
import 'rxjs/add/observable/zip';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]

})
export class ProjectComponent implements OnInit {

  data: any[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {


  }

  onShow() {
    this.data=[];
    Promise.all(
      [
        this.projectService.getData(),
        this.projectService.getDataUser(),
        this.projectService.getPosts(),
        this.projectService.getPut(),
        this.projectService.getPatch()
      ])
      .then(result => {
        result.forEach(element => {
          if (element instanceof Array) {
            element.forEach(x => {
              this.data.push(x);
            });
          }
          else {
            this.data.push(element);
          }
        
        });
      })
      .catch(err => console.log(err))  
  }

 

  Delete(Id) {
    const item = this.data.findIndex(x => x.id === Id);
    this.data.splice(item, 1);
  }

  onShow1() {
    this.data = [];
    Observable.zip(
      this.projectService.getPut1(),
      this.projectService.getPatch1(),
        this.projectService.getData1(),
        this.projectService.getDataUser1(),
        this.projectService.getPosts1(),
       
      )
      .subscribe((result: any[]) => {
        result.forEach(e=>{
          if(e instanceof Array){
            e.forEach(element => {
              this.data.push(element);
            });
          }
          else {
            this.data.push(e);
          }
      }), (err) => { console.log(err) }, () => { } })
  }

}
