import { TestBed } from '@angular/core/testing';

import { AlogService } from './alog.service';

describe('AlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlogService = TestBed.get(AlogService);
    expect(service).toBeTruthy();
  });
});
