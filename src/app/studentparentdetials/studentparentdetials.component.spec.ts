import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentparentdetialsComponent } from './studentparentdetials.component';

describe('StudentparentdetialsComponent', () => {
  let component: StudentparentdetialsComponent;
  let fixture: ComponentFixture<StudentparentdetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentparentdetialsComponent]
    });
    fixture = TestBed.createComponent(StudentparentdetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
