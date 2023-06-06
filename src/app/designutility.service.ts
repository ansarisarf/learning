import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignutilityService {
  constructor() {}
  print(val: string, elContainer: string) {
    let el = document.createElement('li');

    document.getElementById(elContainer)?.appendChild(el);
  }
}
