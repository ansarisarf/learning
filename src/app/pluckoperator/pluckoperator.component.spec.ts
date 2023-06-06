import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckoperatorComponent } from './pluckoperator.component';

describe('PluckoperatorComponent', () => {
  let component: PluckoperatorComponent;
  let fixture: ComponentFixture<PluckoperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PluckoperatorComponent]
    });
    fixture = TestBed.createComponent(PluckoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
