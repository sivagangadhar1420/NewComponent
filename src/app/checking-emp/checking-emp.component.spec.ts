import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingEmpComponent } from './checking-emp.component';

describe('CheckingEmpComponent', () => {
  let component: CheckingEmpComponent;
  let fixture: ComponentFixture<CheckingEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckingEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
