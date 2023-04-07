import { TestBed } from '@angular/core/testing';

import { PharmacyMedicineSupplyService } from './pharmacy-medicine-supply.service';

describe('PharmacyMedicineSupplyService', () => {
  let service: PharmacyMedicineSupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyMedicineSupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
