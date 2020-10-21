import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RNComponent } from './rn.component';

describe('RNComponent', () => {
  let component: RNComponent;
  let fixture: ComponentFixture<RNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
