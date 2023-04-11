import { Injectable } from '@angular/core';
import { Manager } from 'src/Models/Manager';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ManagerLogin } from 'src/Models/ManagerLogin';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient) { }
  reqToRegister = "https://localhost:7287/api/Authorization/Register"
  reqToCheckEmail = "https://localhost:7287/api/Manager/CheckingEmail?email="
  reqToCheckName = "https://localhost:7287/api/Manager/CheckingName?name="

  createManagerDetails(manager: Manager) {
    return this.http.post(this.reqToRegister, manager, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    });
  }

  checkMail(mail: string): Observable<Boolean> {
    return this.http.post<Boolean>(this.reqToCheckEmail + mail, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    });
  }

  checkUniqueName(name: string): Observable<Boolean> {
    return this.http.post<Boolean>(this.reqToCheckName + name, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    });
  }

  req1 = "https://localhost:7287/api/Manager/CheckingEmail?email="
  checkManagerName(managerEmailID: string): Observable<Boolean> {
    return this.http.post<Boolean>(this.req1 + managerEmailID, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'

      })
    });
  }

  req2 = "https://localhost:7287/api/Authorization/Login"
  ManagerLogin(managerlogin: ManagerLogin) {
    return this.http.post(this.req2, managerlogin, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    });
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log("error");
    }
    else {
      console.log("no error");
    }
  }
}

