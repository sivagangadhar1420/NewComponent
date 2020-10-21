import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VishawasSenaComponent } from './vishawas-sena.component';

describe('VishawasSenaComponent', () => {
  let component: VishawasSenaComponent;
  let fixture: ComponentFixture<VishawasSenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VishawasSenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VishawasSenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
