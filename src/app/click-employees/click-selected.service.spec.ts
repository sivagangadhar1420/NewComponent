import { TestBed } from '@angular/core/testing';

import { ClickSelectedService } from './click-selected.service';

describe('ClickSelectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickSelectedService = TestBed.get(ClickSelectedService);
    expect(service).toBeTruthy();
  });
});
