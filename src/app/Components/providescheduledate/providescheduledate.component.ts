import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { DaydateValidator, dateValidator } from 'src/app/Shared/past-day.validator';
import { DatesSchedule } from 'src/Models/DatesSchedule';
import { RepresentativeSchedule } from 'src/Models/RepresentativeSchedule';
import { DateScheduleService } from 'src/app/Services/DateSchedule/date-schedule.service';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';

@Component({
  selector: 'app-providescheduledate',
  templateUrl: './providescheduledate.component.html',
  styleUrls: ['./providescheduledate.component.css']
})
export class ProvidescheduledateComponent {
  selectRadio:string
  datetoschedule:string=""
  sd:string=""
  scheduleform:FormGroup=new FormGroup({})
  listofbookeddates:DatesSchedule[]=[]
  date:Date=new Date()
  listofscheduledresults:RepresentativeSchedule[]=[]
  ngOnInit(){
      this.scheduleform=new FormGroup({
        scheduledate:new FormControl(this.date,[
          Validators.required,dateValidator(), DaydateValidator()
        ]),
      })
       this.bookedServObj.getAllDateSchedule().subscribe(data=>{
        this.listofbookeddates=data;
       })
  }
constructor(private scheduleobj: ScheduleService,private route:Router,private bookedServObj: DateScheduleService){}

schedule()
  {
    let scheduledate1={"startDate":this.scheduleform.value.scheduledate};
    this.datetoschedule=formatDate(scheduledate1.startDate,'dd-MM-yyyy','en-US');
    this.bookedServObj.checkDateAvailability(this.datetoschedule).subscribe(data=>{
      if(!data){
        alert("Already Booked ! Please pick another date")
      }
      else{
        this.scheduleobj.createSchedule(this.datetoschedule).subscribe(data=>{
          this.listofscheduledresults=data;
          alert("Booked Successfully !");
          location.reload();
        })
      }
    })
  }
}