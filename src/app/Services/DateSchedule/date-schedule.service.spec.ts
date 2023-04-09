import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { DateScheduleService } from './date-schedule.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatesSchedule } from 'src/Models/DatesSchedule';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DateScheduleService', () => {
  let service: DateScheduleService;
  let http:HttpClient;
  let DateScheduless:Observable<DatesSchedule[]>;
  let Availability:Observable<Boolean>;
  let MockDateSchedules:DatesSchedule[];
  let MockDate:DatesSchedule;
  let Mockavailability:Boolean;
  let httpController:HttpTestingController;
  let url = 'https://localhost:7287/';

  beforeEach(() => {
    MockDate={
      startDate:"m",
      endDate:"pw",
      supplied:true,
      completed:true,
      countCompletedMeets:4
    }
    MockDateSchedules=[{
      startDate:"m",
      endDate:"p",
      supplied:true,
      completed:true,
      countCompletedMeets:3
    },{
      startDate:"m",
      endDate:"pa",
      supplied:false,
      completed:true,
      countCompletedMeets:3
    }]
    Mockavailability = true;
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule,
    ],
    });
    service = TestBed.inject(DateScheduleService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('Get all dares schedules',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
    service.getAllDateSchedule().subscribe((res)=>{
    expect(res).toEqual(MockDateSchedules);
    });
    const req=httpController.expectOne({
        method:'GET',
        url:`${url}api/DatesSchedule/`,
    });
    req.flush(MockDateSchedules);
  })));
  it('Check Dates Availability',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
    let date = "01-01-2023";
    service.checkDateAvailability(date).subscribe((res)=>{
    expect(res).toEqual(Mockavailability);
    });
    const req=httpController.expectOne({
        method:'GET',
        url:`${url}DateAvailability/${date}`,
    });
    req.flush(Mockavailability);
  })));
  it('Marks Supplied',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
    let date = "01-01-2023";
    service.markSupplied(date).subscribe((res)=>{
    expect(res).toEqual(MockDate);
    });
    const req=httpController.expectOne({
        method:'GET',
        url:`${url}MarkSupplied/${date}`,
    });
    req.flush(MockDate);
  })));
  
});
