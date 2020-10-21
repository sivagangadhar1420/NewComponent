import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEmployeesComponent } from './click-employees.component';

describe('ClickEmployeesComponent', () => {
  let component: ClickEmployeesComponent;
  let fixture: ComponentFixture<ClickEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
