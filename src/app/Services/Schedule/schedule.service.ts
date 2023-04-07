import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepresentativeSchedule } from 'src/Models/RepresentativeSchedule';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private http:HttpClient) { }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:7287/api/MedicalRepresentativeSchedule/";

  
  //Method to get the Schedule from the API.
  getScheduleByDate(startDate:string):Observable<RepresentativeSchedule[]>
  {
    console.log("Schedule came");
    return this.http.get<RepresentativeSchedule[]>(this.req+"GetScheduleByDate/"+startDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  createSchedule(startDate:string):Observable<RepresentativeSchedule[]>
  {
    console.log("Schedule came");
    return this.http.get<RepresentativeSchedule[]>(this.req+"CreateSchedule/"+startDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
