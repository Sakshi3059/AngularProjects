import { TestBed, async, inject } from '@angular/core/testing';

import { LoggGuard } from './logg.guard';

describe('LoggGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggGuard]
    });
  });

  it('should ...', inject([LoggGuard], (guard: LoggGuard) => {
    expect(guard).toBeTruthy();
  }));
});
