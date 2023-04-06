import { Injectable } from '@angular/core';
import { Manager } from 'src/Models/Manager';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }
  req="https://localhost:7287/api/Authorization/Register"
createManagerDetails(manager:Manager):Observable<Manager>
{
  return this.http.post<Manager>(this.req,manager,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
      
    })
  });
}

}
