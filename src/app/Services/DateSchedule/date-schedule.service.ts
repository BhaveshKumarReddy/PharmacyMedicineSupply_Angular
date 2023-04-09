import { DatePipe, formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatesSchedule } from 'src/Models/DatesSchedule';

@Injectable({
  providedIn: 'root'
})
export class DateScheduleService {

  currentDateSchedule: DatesSchedule = null;
  AllSchedule:DatesSchedule[]=[];
  auth_token:string;

  constructor(private http:HttpClient) {
    this.auth_token = localStorage.getItem('token');
  }
  
  req:string="https://localhost:7287/";

  getAllDateSchedule():Observable<DatesSchedule[]>
  {
    return this.http.get<DatesSchedule[]>(this.req+"api/DatesSchedule/",{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization': 'Bearer '+this.auth_token
      })
    });
  }

  checkDateAvailability(selectedDate:string):Observable<Boolean>
  {
    return this.http.get<Boolean>(this.req+"DateAvailability/"+selectedDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization': 'Bearer '+this.auth_token
      })
    });
  }

  markSupplied(selectedDate:string):Observable<DatesSchedule>
  {
    return this.http.get<DatesSchedule>(this.req+"MarkSupplied/"+selectedDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization': 'Bearer '+this.auth_token
      })
    });
  }
}