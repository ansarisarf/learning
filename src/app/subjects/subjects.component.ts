import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjectData1='';
  subjectData2='';

  getSubjectData(){
    let mySubject = new Subject();

    mySubject.subscribe((data :any)=>{
      this.subjectData1=data;
    })
    mySubject.subscribe((data :any)=>{
      this.subjectData2=data;
    })
    mySubject.next(Math.floor(Math.random()*99)+1)
  }
}
