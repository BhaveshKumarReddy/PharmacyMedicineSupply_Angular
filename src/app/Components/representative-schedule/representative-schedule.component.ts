import { Component, OnInit } from '@angular/core';
import { DatesSchedule } from 'src/Models/DatesSchedule';
import { DateScheduleService } from 'src/app/Services/DateSchedule/date-schedule.service';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';
import { DatePipe, formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RepresentativeSchedule } from 'src/Models/RepresentativeSchedule';

@Component({
  selector: 'app-representative-schedule',
  templateUrl: './representative-schedule.component.html',
  styleUrls: ['./representative-schedule.component.css']
})


export class RepresentativeScheduleComponent implements OnInit {

  newSchedule:RepresentativeSchedule[]=[];
  DateSchedule:DatesSchedule[]=[];
  currentDateSchedule:DatesSchedule;
  startDate: string;
  schedules: RepresentativeSchedule[];

  constructor(private RepScheduleObj:ScheduleService, private route:ActivatedRoute, private DateScheduleObj:DateScheduleService, private router: Router){
    this.startDate = formatDate(this.route.snapshot.paramMap.get("date"),'MM-dd-yyyy','en-US');
    console.log(this.startDate);
  }

  ngOnInit(): void {
    this.get_ScheduleByDate();
    this.getDateScheduleByDate();
  }

  get_ScheduleByDate():void
  {
    this.RepScheduleObj.getScheduleByDate(this.startDate).subscribe(data=>{
      this.schedules=data;
    });
  }

  getDateScheduleByDate():void{
    this.DateScheduleObj.getAllDateSchedule().subscribe(data =>{
      data.forEach(element => {
        if(formatDate(element.startDate,'MM-dd-yyyy','en-US') == formatDate(this.startDate,'MM-dd-yyyy','en-US')){
          this.currentDateSchedule = element;
        }
      })
    });
  }

  checkEligible(scheduleDate:string){
    return formatDate(scheduleDate,'MM-dd-yyyy','en-US')<=formatDate(new Date(),'MM-dd-yyyy','en-US');
  }

  OpenMedicineDemand(scheduleObj:RepresentativeSchedule){
    console.log(scheduleObj.medicine);
    localStorage.setItem('medicine',scheduleObj.medicine);
    localStorage.setItem('scheduleStartDate',this.startDate);
    localStorage.setItem('scheduleId',scheduleObj.id+"");
    this.router.navigateByUrl("/medicinedemand/"+scheduleObj.id);
  }

  newPharmacySupply(){
    localStorage.setItem('newSupply',true+"");
    this.router.navigateByUrl("/supply/"+this.startDate);
  }

  pharmacySupply(){
    localStorage.setItem('newSupply',false+"");
    this.router.navigateByUrl("/supply/"+this.startDate);
  }
}
