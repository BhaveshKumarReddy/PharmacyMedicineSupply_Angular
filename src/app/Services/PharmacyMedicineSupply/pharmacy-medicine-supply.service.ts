import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PharmacyMedicineSuppliesResponse } from 'src/Models/PharmacyMedicineSupplyResponse';

@Injectable({
  providedIn: 'root'
})
export class PharmacyMedicineSupplyService {
  constructor(private http:HttpClient) { }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:7287/api/PharmacyMedSupply/";

  
  //Method to get the Schedule from the API.
  createPharmacyMedSupply(startDate:string):Observable<PharmacyMedicineSuppliesResponse[]>
  {
    return this.http.get<PharmacyMedicineSuppliesResponse[]>(this.req+"Supply/"+1+"/"+startDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  alreadySupplied(page:number, startDate:string):Observable<PharmacyMedicineSuppliesResponse[]>
  {
    return this.http.get<PharmacyMedicineSuppliesResponse[]>(this.req+"AlreadySupplied/"+page+"/"+startDate,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
