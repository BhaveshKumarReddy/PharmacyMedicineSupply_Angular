import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineDemand } from 'src/Models/MedicineDemand';

@Injectable({
  providedIn: 'root'
})
export class MedicineDemandService {
  constructor(private http:HttpClient) { }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:7287/api/MedicineDemand/";

  
  //Method to get the Schedule from the API.
  updateListOfMedicineDemand(id:number,demands:MedicineDemand[]):Observable<any>
  {
    return this.http.put<any>(this.req+"UpdateAllDemands/"+id,JSON.stringify(demands),{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });    
  }
}
