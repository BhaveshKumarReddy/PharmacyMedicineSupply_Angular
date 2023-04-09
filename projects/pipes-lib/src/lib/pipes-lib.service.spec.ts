import { TestBed } from '@angular/core/testing';

import { PipesLibService } from './pipes-lib.service';

describe('PipesLibService', () => {
  let service: PipesLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipesLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
