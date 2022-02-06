import { TestBed } from '@angular/core/testing';

import { DbserService } from './dbser.service';

describe('DbserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbserService = TestBed.get(DbserService);
    expect(service).toBeTruthy();
  });
});
