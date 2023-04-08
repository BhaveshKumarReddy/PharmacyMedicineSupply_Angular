import { TestBed } from '@angular/core/testing';

import { BookeddatesService } from './bookeddates.service';

describe('BookeddatesService', () => {
  let service: BookeddatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookeddatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
