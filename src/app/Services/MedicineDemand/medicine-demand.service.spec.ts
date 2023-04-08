import { TestBed } from '@angular/core/testing';

import { MedicineDemandService } from './medicine-demand.service';

describe('MedicineDemandService', () => {
  let service: MedicineDemandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineDemandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
