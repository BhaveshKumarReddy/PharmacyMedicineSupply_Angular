import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ProvideScheduleDateService } from 'src/app/Services/ProvideScheduleDate/provide-schedule-date.service';
import { Router } from '@angular/router';
import { RepresentativeSchedules } from 'src/Models/RepresentativeSchedules';
import { formatDate } from '@angular/common';
import { BookeddatesService } from 'src/app/Services/BookedDates/bookeddates.service';
import { DaydateValidator, dateValidator } from 'src/app/Shared/past-day.validator';
import { BookedDates } from 'src/Models/BookedDates';

@Component({
  selector: 'app-providescheduledate',
  templateUrl: './providescheduledate.component.html',
  styleUrls: ['./providescheduledate.component.css']
})
export class ProvidescheduledateComponent {
  datetoschedule:string=""
  sd:string=""
scheduleform:FormGroup=new FormGroup({})
listofbookeddates:BookedDates[]=[]

date:Date=new Date()
listofscheduledresults:RepresentativeSchedules[]=[]
ngOnInit(){
  this.scheduleform=new FormGroup({
    scheduledate:new FormControl(this.date,[
      Validators.required,dateValidator(), DaydateValidator()
    ]),
  })
   this.bookedServObj.getAllBookedDates().subscribe(data=>{
    this.listofbookeddates=data;
   })
}
constructor(private scheduleobj:ProvideScheduleDateService,private route:Router,private bookedServObj:BookeddatesService){}

schedule()
  {
    let scheduledate1={"startDate":this.scheduleform.value.scheduledate};
    this.datetoschedule=formatDate(scheduledate1.startDate,'dd-MM-yyyy','en-US');
    this.scheduleobj.checkAvailability(this.datetoschedule).subscribe(data=>{
      if(!data){
        alert("Already Booked ! Please pick another date")
      }
      else{
        this.scheduleobj.scheduleSlot(this.datetoschedule).subscribe(data=>{
          this.listofscheduledresults=data;
          alert("Booked Successfully !");
        })
      }
    })
  }
}