import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioFilesComponent } from './radio-files.component';

describe('RadioFilesComponent', () => {
  let component: RadioFilesComponent;
  let fixture: ComponentFixture<RadioFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
