import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { PharmacyMedicineSupplyService } from './pharmacy-medicine-supply.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PharmacyMedicineSupply } from 'src/Models/PharmacyMedicineSupply';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PharmacyMedicineSuppliesResponse } from 'src/Models/PharmacyMedicineSupplyResponse';

describe('PharmacyMedicineSupplyService', () => {
  let service: PharmacyMedicineSupplyService;
  let http:HttpClient;
  let PharmacyMedicineSupplys:Observable<PharmacyMedicineSupply[]>;
  let MockPharmacyMedicineSupplys:PharmacyMedicineSupply[];
  let MockPharmacyMedicineSupplyResponse:PharmacyMedicineSuppliesResponse[];
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
    MockPharmacyMedicineSupplyResponse=[{
      pharmacyMedSupplies:[{
        medicineName:"m",
        pharmacyName:"p",
        supplyCount:10,
        dateTime:Date.prototype
      },{
        medicineName:"m",
        pharmacyName:"p",
        supplyCount:10,
        dateTime:Date.prototype
      }],
      pages:4,
      currentPage:1
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
    expect(res).toEqual(MockPharmacyMedicineSupplyResponse);
    });
    const req=httpController.expectOne({
        method:'GET',
        url:`${url}Supply/1/${"date"}`,
    });
    req.flush(MockPharmacyMedicineSupplyResponse);
})));
it('get Already supplied',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
  let date = "01-01-2023";
  let page = 1;
  service.alreadySupplied(page,"date").subscribe((res)=>{
  expect(res).toEqual(MockPharmacyMedicineSupplyResponse);
  });
  const req=httpController.expectOne({
      method:'GET',
      url:`${url}AlreadySupplied/1/${"date"}`,
  });
  req.flush(MockPharmacyMedicineSupplyResponse);
})));
});
