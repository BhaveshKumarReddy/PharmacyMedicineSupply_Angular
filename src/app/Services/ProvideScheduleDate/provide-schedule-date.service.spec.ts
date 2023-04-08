import { TestBed } from '@angular/core/testing';

import { ProvideScheduleDateService } from './provide-schedule-date.service';

describe('ProvideScheduleDateService', () => {
  let service: ProvideScheduleDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideScheduleDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
