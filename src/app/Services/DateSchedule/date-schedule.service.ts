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
  constructor(private http:HttpClient) { }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:7287/";

  
  //Method to get the Schedule from the API.
  getAllDateSchedule():Observable<DatesSchedule[]>
  {
    return this.http.get<DatesSchedule[]>(this.req+"api/DatesSchedule/",{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  checkDateAvailability(selectedDate:string):Observable<Boolean>
  {
    return this.http.get<Boolean>(this.req+"DateAvailability/"+selectedDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  markSupplied(selectedDate:string):Observable<DatesSchedule>
  {
    return this.http.get<DatesSchedule>(this.req+"MarkSupplied/"+selectedDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }



  }