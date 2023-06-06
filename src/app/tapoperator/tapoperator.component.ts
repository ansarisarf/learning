import { Component } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { toArray } from 'rxjs-compat/operator/toArray';
import { DesignutilityService } from '../designutility.service';

@Component({
  selector: 'app-tapoperator',
  templateUrl: './tapoperator.component.html',
  styleUrls: ['./tapoperator.component.css'],
})
export class TapoperatorComponent {
  membersData: any;
  tapSubacription!: Subscription;

  constructor(private _createElementcusotm: DesignutilityService) {}

  getTapOperatorData() {
    const tapObser1 = interval(2000);
    const arrData = ['amir', 'salman', 'srk', 'katrina', 'kreena', 'sunny'];
    tapObser1
      .pipe(
        tap((res) => {
          if (res == 4) {
            this.tapSubacription.unsubscribe();
          }
        }),
        map((data) => arrData[data])
      )
      .subscribe((res) => {
        console.log(typeof(res));
        this.membersData = res;
        this._createElementcusotm.print(res, 'elContainer');
      });
  }
}
