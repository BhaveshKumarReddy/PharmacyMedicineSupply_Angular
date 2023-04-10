import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepresentativeSchedule } from 'src/Models/RepresentativeSchedule';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  auth_token:string;
  constructor(private http:HttpClient) {
    this.auth_token = localStorage.getItem('token');
  }
  
  req:string="https://localhost:7287/api/MedicalRepresentativeSchedule/";

  getScheduleByDate(startDate:string):Observable<RepresentativeSchedule[]>
  {
    var formattedDate = formatDate(startDate,'dd-MM-yyyy','en-US');
    return this.http.get<RepresentativeSchedule[]>(this.req+"GetScheduleByDate/"+formattedDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  createSchedule(startDate:string):Observable<RepresentativeSchedule[]>
  {
    return this.http.get<RepresentativeSchedule[]>(this.req+"CreateSchedule/"+startDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
