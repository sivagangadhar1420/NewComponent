import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputMyOutPutComponent } from './my-input-my-out-put.component';

describe('MyInputMyOutPutComponent', () => {
  let component: MyInputMyOutPutComponent;
  let fixture: ComponentFixture<MyInputMyOutPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInputMyOutPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputMyOutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
