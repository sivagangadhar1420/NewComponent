import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RN1Component } from './rn1.component';

describe('RN1Component', () => {
  let component: RN1Component;
  let fixture: ComponentFixture<RN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
