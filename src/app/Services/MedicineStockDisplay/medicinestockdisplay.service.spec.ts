import { TestBed } from '@angular/core/testing';

import { MedicinestockdisplayService } from './medicinestockdisplay.service';

describe('MedicinestockdisplayService', () => {
  let service: MedicinestockdisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicinestockdisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
