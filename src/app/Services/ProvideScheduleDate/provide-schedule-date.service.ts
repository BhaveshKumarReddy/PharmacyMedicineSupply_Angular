import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepresentativeSchedules } from 'src/Models/RepresentativeSchedules';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvideScheduleDateService {

  constructor(private http:HttpClient) { }
  req="https://localhost:7287/api/MedicalRepresentativeSchedule/CreateSchedule/"
  reqtocheckavailability="https://localhost:7287/DateAvailability/"
scheduleSlot(slotdate:string):Observable<any>
{
  return this.http.get<any>(this.req+slotdate,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
      
    })
  });
}
checkAvailability(slotdate:string):Observable<any>
{
  return this.http.get<any>(this.reqtocheckavailability+slotdate,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
      
    })
  });
}
}
