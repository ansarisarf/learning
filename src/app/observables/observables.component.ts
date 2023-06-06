import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  observablData1='';
  observablData2='';

  getObservableData(){
    let myObservable = new Observable <any>(observer=>{
      // observer.next("Please Subscribe for Observable")
      observer.next(Math.floor(Math.random()*99)+1)
    })
    myObservable.subscribe((data)=>{
      console.log(data);
      this.observablData1=data;
    })
    myObservable.subscribe((data)=>{
      console.log(data);
      this.observablData2=data;
    })
  }

}
