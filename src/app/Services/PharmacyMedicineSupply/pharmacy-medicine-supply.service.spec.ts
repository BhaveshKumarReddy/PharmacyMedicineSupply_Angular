import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { PharmacyMedicineSupplyService } from './pharmacy-medicine-supply.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PharmacyMedicineSupply } from 'src/Models/PharmacyMedicineSupply';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PharmacyMedicineSupplyService', () => {
  let service: PharmacyMedicineSupplyService;
  let http:HttpClient;
  let PharmacyMedicineSupplys:Observable<PharmacyMedicineSupply[]>;
  let MockPharmacyMedicineSupplys:PharmacyMedicineSupply[];
  let httpController:HttpTestingController;
  let url = 'https://localhost:7287/api/PharmacyMedSupply/';


  beforeEach(() => {
    MockPharmacyMedicineSupplys=[{
      medicineName:"m",
      pharmacyName:"p",
      supplyCount:10,
      dateTime:Date.prototype
    },{
      medicineName:"m",
      pharmacyName:"p",
      supplyCount:10,
      dateTime:Date.prototype
    }]
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule,
    ],
    });
    service = TestBed.inject(PharmacyMedicineSupplyService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('create pharmacy Medicine Supply',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
    let date = "01-01-2023";
    service.createPharmacyMedSupply("date").subscribe((res)=>{
    expect(res).toEqual(MockPharmacyMedicineSupplys);
    });
    const req=httpController.expectOne({
        method:'GET',
        url:`${url}Supply/${"date"}`,
    });
    req.flush(MockPharmacyMedicineSupplys);
})));
it('get Already supplied',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
  let date = "01-01-2023";
  service.alreadySupplied("date").subscribe((res)=>{
  expect(res).toEqual(MockPharmacyMedicineSupplys);
  });
  const req=httpController.expectOne({
      method:'GET',
      url:`${url}AlreadySupplied/${"date"}`,
  });
  req.flush(MockPharmacyMedicineSupplys);
})));
});
