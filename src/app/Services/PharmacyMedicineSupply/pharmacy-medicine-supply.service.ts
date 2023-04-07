import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyMedicineSupplyService {
  constructor(private http:HttpClient) { }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:7287/api/PharmacyMedSupply/";

  
  //Method to get the Schedule from the API.
  createPharmacyMedSupply(startDate:string):Observable<any>
  {
    return this.http.get<any>(this.req+"Supply/"+startDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  alreadySupplied(startDate:string):Observable<any>
  {
    return this.http.get<any>(this.req+"AlreadySupplied/"+startDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
