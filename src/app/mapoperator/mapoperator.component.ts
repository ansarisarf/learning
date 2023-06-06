import { Component } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignutilityService } from '../designutility.service';

@Component({
  selector: 'app-mapoperator',
  templateUrl: './mapoperator.component.html',
  styleUrls: ['./mapoperator.component.css']
})
export class MapoperatorComponent {
  sub1!: Subscription;
  mesg1!: string;

  membersData: any;
  constructor(private _createElementcusotm :DesignutilityService){}

   members= from([
    {id:1,name:"Amir ALi"},
    {id:2,name:"Afsar ALi"},
    {id:3,name:"Akbar ALi"},
    {id:4,name:"Bila "},
    {id:5,name:"Shoib ALi"},
    {id:6,name:"Insan ALi"},
  ])
  getMapOperatorData(){
    const brodCastVideos = interval(1000);
   this.sub1= brodCastVideos.pipe(
    map(data=>{
      return "Video---" + data;
    })
   ).
   subscribe(res=>{
      // console.log(res);
      this.mesg1=res;
    })
    
    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

   const membersObserval= this.members.pipe(
      map(data=>data.name)
    )

    membersObserval.subscribe(res=>{
      this.membersData=res
      this._createElementcusotm.print(res,'elContainer2')
    })
  }
}
