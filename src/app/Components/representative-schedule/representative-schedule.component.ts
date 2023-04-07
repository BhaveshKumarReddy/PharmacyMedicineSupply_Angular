import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepresentativeSchedule } from 'src/Models/RepresentativeSchedule';

@Component({
  selector: 'app-representative-schedule',
  templateUrl: './representative-schedule.component.html',
  styleUrls: ['./representative-schedule.component.css']
})
export class RepresentativeScheduleComponent {
  
  startDate: string;
  schedules: RepresentativeSchedule[];

  constructor(private route: ActivatedRoute, private router: Router){
    
    this.startDate = this.route.snapshot.paramMap.get("date")+"";
    console.log(this.startDate);

    this.schedules = [
      {
    representativeName: 'Bhavesh',
    doctorName: 'Roshan',
    treatingAilment: 'general',
    medicine: 'paracetamol, amoxilin, nicip',
    slot: '1pm - 2pm',
    date: "04-04-2023",
    doctorContactNumber: '9542289337',
    id: 12,
    status: true
      },
      {
        representativeName: 'Bhavesh',
        doctorName: 'Roshan',
        treatingAilment: 'general',
        medicine: 'paracetamol, amoxilin, nicip',
        slot: '1pm - 2pm',
        date:  "04-04-2023",
        doctorContactNumber: '9542289337',
        id: 12,
        status: false
      },
      {
        representativeName: 'Bhavesh',
        doctorName: 'Roshan',
        treatingAilment: 'general',
        medicine: 'paracetamol, amoxilin, nicip',
        slot: '1pm - 2pm',
        date: "04-04-2023",
        doctorContactNumber: '9542289337',
        id: 12,
        status: true
        },
        {
          representativeName: 'Bhavesh',
          doctorName: 'Roshan',
          treatingAilment: 'general',
          medicine: 'paracetamol, amoxilin, nicip',
          slot: '1pm - 2pm',
          date: "04-04-2023",
          doctorContactNumber: '9542289337',
          id: 12,
          status: false
        }
    ]
  }

  checkEligible(scheduleDate:string){
    return scheduleDate<=formatDate(new Date(),'MM-dd-yyyy','en-US');
  }

  OpenMedicineDemand(medicine: string){
    localStorage.setItem('medicine',medicine);
    this.router.navigateByUrl("/medicinedemand");
  }
}
