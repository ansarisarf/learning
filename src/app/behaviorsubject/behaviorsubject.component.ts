import { Component } from '@angular/core';
import { of } from 'rxjs';
import { DesignutilityService } from '../designutility.service';

@Component({
  selector: 'app-behaviorsubject',
  templateUrl: './behaviorsubject.component.html',
  styleUrls: ['./behaviorsubject.component.css']
})
export class BehaviorsubjectComponent {
  ofDataMsg!: string;
  constructor(private _createElementcusotm :DesignutilityService){}
  getBehaviorSubjectData(){
    
    const obs1 = of('1','3','7','6','7');
    obs1.subscribe(res=>{
      console.log(res);
      this.ofDataMsg=res;
      this._createElementcusotm.print(res,'elContainer')
    })
  }
}
