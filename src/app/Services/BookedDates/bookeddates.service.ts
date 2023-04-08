import { Injectable } from '@angular/core';
import { BookedDates } from 'src/Models/BookedDates';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookeddatesService {
req="https://localhost:7287/api/DatesSchedule"
  constructor(private http:HttpClient) { }
  getAllBookedDates():Observable<BookedDates[]>
 {
   return this.http.get<BookedDates[]>(this.req);
 }
}
