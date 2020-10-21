import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoutingComponent } from './employee-routing.component';

describe('EmployeeRoutingComponent', () => {
  let component: EmployeeRoutingComponent;
  let fixture: ComponentFixture<EmployeeRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
