import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CN1Component } from './cn1.component';

describe('CN1Component', () => {
  let component: CN1Component;
  let fixture: ComponentFixture<CN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
