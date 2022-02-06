import { TestBed } from '@angular/core/testing';

import { DynTitleService } from './dyn-title.service';

describe('DynTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynTitleService = TestBed.get(DynTitleService);
    expect(service).toBeTruthy();
  });
});
