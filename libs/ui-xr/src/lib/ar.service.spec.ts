import { TestBed } from '@angular/core/testing';

import { ArService } from './ar.service';

describe('ArService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArService = TestBed.get(ArService);
    expect(service).toBeTruthy();
  });
});
