import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { MedicinestockdisplayService } from './medicinestockdisplay.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MedicineStock } from 'src/Models/MedicineStock';
import { Observable } from 'rxjs';

describe('MedicinestockdisplayService', () => {
  let service: MedicinestockdisplayService;
  let http:HttpClient;
  let MedicineStocks:Observable<MedicineStock[]>;
  let MockMedicineStocks:MedicineStock[];
  let httpController:HttpTestingController;
  let url = 'https://localhost:7287/api/MedicineStocks';

  beforeEach(() => {
    MockMedicineStocks=[{
      name:"a",
      chemicalComposition:"c",
      targetAilment:"ta",
      dateOfExpiry: new Date,
      numberOfTabletsInStock:10
    },{
      name:"b",
      chemicalComposition:"c",
      targetAilment:"ca",
      dateOfExpiry: new Date,
      numberOfTabletsInStock:10
    }]
    TestBed.configureTestingModule({
      imports:[
          HttpClientModule,
          HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(MedicinestockdisplayService);
    httpController = TestBed.inject(HttpTestingController);
  });
  it('get Medicine Stocks',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
    service.fetchMedicineStockDetails().subscribe((res)=>{
    expect(res).toEqual(MockMedicineStocks);
    });
    const req=httpController.expectOne({
        method:'GET',
        url:`${url}`,
    });
    req.flush(MockMedicineStocks);
})));
});
