import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfSTYlesComponent } from './if-styles.component';

describe('IfSTYlesComponent', () => {
  let component: IfSTYlesComponent;
  let fixture: ComponentFixture<IfSTYlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfSTYlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfSTYlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
