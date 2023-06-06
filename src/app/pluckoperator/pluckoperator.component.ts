import { Component } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluckoperator',
  templateUrl: './pluckoperator.component.html',
  styleUrls: ['./pluckoperator.component.css']
})
export class PluckoperatorComponent {
  membersData: any;
  members= ([
    {id:1,name:"Amir ALi"},
    {id:2,name:"Afsar ALi"},
    {id:3,name:"Akbar ALi"},
    {id:4,name:"Bila "},
    {id:5,name:"Shoib ALi"},
    {id:6,name:"Insan ALi"},
  ])
  getPluckOperatorData(){
    const PluckObservable=from(this.members).pipe(
      pluck("name"),
      toArray()
    ).subscribe(rse=>{
        this.membersData=rse  
    })
  }
}
