import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineStock } from 'src/Models/MedicineStock';
import { MedicineStockResponse } from 'src/Models/MedicineStockResponse';

@Injectable({
  providedIn: 'root'
})
export class MedicinestockdisplayService {

  constructor(private http:HttpClient) {}

  reqestToManagerDetails="https://localhost:7287/api/MedicineStocks"

  fetchMedicineStockDetails():Observable<MedicineStock[]>
  {
    return this.http.get<MedicineStock[]>(this.reqestToManagerDetails,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  fetchMedicineStock(page:number):Observable<MedicineStockResponse[]>
  {
    return this.http.get<MedicineStockResponse[]>("https://localhost:7287/api/MedicineStocks/"+page,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
}
