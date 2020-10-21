import { TestBed } from '@angular/core/testing';

import { HttpEmployeeService } from './http-employee.service';

describe('HttpEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpEmployeeService = TestBed.get(HttpEmployeeService);
    expect(service).toBeTruthy();
  });
});
