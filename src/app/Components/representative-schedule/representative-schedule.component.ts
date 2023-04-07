import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatesSchedule } from 'src/Models/DatesSchedule';
import { RepresentativeSchedule } from 'src/Models/RepresentativeSchedule';
import { DateScheduleService } from 'src/app/Services/DateSchedule/date-schedule.service';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';

@Component({
  selector: 'app-representative-schedule',
  templateUrl: './representative-schedule.component.html',
  styleUrls: ['./representative-schedule.component.css']
})
export class RepresentativeScheduleComponent implements OnInit {
  startDate:string;
  Schedule:RepresentativeSchedule[]=[];
  newSchedule:RepresentativeSchedule[]=[];
  DateSchedule:DatesSchedule[]=[];
  currentDateSchedule:DatesSchedule;
  constructor(private RepScheduleObj:ScheduleService, private route:ActivatedRoute, private DateScheduleObj:DateScheduleService)
  {
    this.startDate = this.route.snapshot.paramMap.get("date");
  }
  ngOnInit(){
    //this.getDateScheduleByDate();
    //this.checkDateAvilability();
    this.markSuppplied();
  }

  get_ScheduleByDate():void
  {
    // let startDate = new Date(this.startDate);
    this.RepScheduleObj.getScheduleByDate(this.startDate).subscribe(data=>{
      this.Schedule=data;
      console.log(typeof this.Schedule[0].date);
    });
  }

  createSchedule():void{
    this.RepScheduleObj.createSchedule(this.startDate).subscribe(data=>{
      this.newSchedule=data;
      console.log(this.newSchedule);
    });
  }

  getDateScheduleByDate():void{
    this.DateScheduleObj.getAllDateSchedule().subscribe(data =>{
      data.forEach(element => {
        if(formatDate(element.startDate,'MM-dd-yyyy','en-US') == this.startDate){
          this.currentDateSchedule = element;
          console.log(this.currentDateSchedule);
        }
      })
    });
  }
  checkDateAvilability():void{
    this.DateScheduleObj.checkDateAvailability(this.startDate).subscribe(data=>{
      //this.newSchedule=data;
      console.log(data);
    });
  }

  markSuppplied():void{
    this.DateScheduleObj.markSupplied(this.startDate).subscribe(data=>{
      //this.newSchedule=data;
      console.log(data);
    });
  }

}
