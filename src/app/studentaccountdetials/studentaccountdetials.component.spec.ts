import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaccountdetialsComponent } from './studentaccountdetials.component';

describe('StudentaccountdetialsComponent', () => {
  let component: StudentaccountdetialsComponent;
  let fixture: ComponentFixture<StudentaccountdetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentaccountdetialsComponent]
    });
    fixture = TestBed.createComponent(StudentaccountdetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
