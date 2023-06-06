import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsubjectComponent } from './behaviorsubject.component';

describe('BehaviorsubjectComponent', () => {
  let component: BehaviorsubjectComponent;
  let fixture: ComponentFixture<BehaviorsubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviorsubjectComponent]
    });
    fixture = TestBed.createComponent(BehaviorsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
