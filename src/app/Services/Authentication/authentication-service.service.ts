import { Injectable } from '@angular/core';
import { Manager } from 'src/Models/Manager';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }
  reqtoregister="https://localhost:7287/api/Authorization/Register"
  reqtocheckemail="https://localhost:7287/api/Manager/CheckingEmail?email="
  reqtocheckname="https://localhost:7287/api/Manager/CheckingName?name="

createManagerDetails(manager:Manager):Observable<Manager>
{
  return this.http.post<Manager>(this.reqtoregister,manager,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
      
    })
  });
}
checkMail(mail:string):Observable<Boolean>{
 
  return this.http.post<Boolean>(this.reqtocheckemail+mail,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}
checkUniqueName(name:string):Observable<Boolean>{
 
  return this.http.post<Boolean>(this.reqtocheckname+name,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}

}
