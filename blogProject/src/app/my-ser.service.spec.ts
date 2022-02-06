import { TestBed } from '@angular/core/testing';

import { MySerService } from './my-ser.service';

describe('MySerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySerService = TestBed.get(MySerService);
    expect(service).toBeTruthy();
  });
});
