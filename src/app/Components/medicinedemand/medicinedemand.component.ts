import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineDemand } from 'src/Models/MedicineDemand';
import { MedicineDemandService } from 'src/app/Services/MedicineDemand/medicine-demand.service';

@Component({
  selector: 'app-medicinedemand',
  templateUrl: './medicinedemand.component.html',
  styleUrls: ['./medicinedemand.component.css']
})
export class MedicinedemandComponent implements OnInit {
  medicines = [];
  medicineDemand:MedicineDemand[]=[];
  new_medicineDemand:MedicineDemand;
  scheduleID:number;
  errorDemand:string="";

  constructor(private route: ActivatedRoute, private router: Router, private demandService: MedicineDemandService){
    this.scheduleID = parseInt(this.route.snapshot.paramMap.get("id")+"");
    this.medicines = (localStorage.getItem('medicine')).split(',') ;
    this.medicines.forEach(element => {
      console.log(element);
      this.new_medicineDemand = {
        name: element,
        demandCount: 0
      };
      this.medicineDemand.push(this.new_medicineDemand);
    });
  }

  ngOnInit(){
    console.log(this.medicineDemand);
  }

  submitDemand(){
    console.log(this.medicineDemand);
    this.errorDemand="";
    for(let i=0;i<this.medicineDemand.length;i++){
      if(this.medicineDemand[i].demandCount==null){
        this.errorDemand = "Required";
        break;
      }
      else if(this.medicineDemand[i].demandCount!=null && (this.medicineDemand[i].demandCount>100 || this.medicineDemand[i].demandCount<0)){
        if(this.medicineDemand[i].demandCount>100){
          this.errorDemand = "Demand Can't be more than 100";
          break;
        }
        else{
          this.errorDemand = "Demand Can't be in negative";
          break;
        }
      }
    }
    var scheduleDate = localStorage.getItem('scheduleStartDate');
    console.log(scheduleDate);
    if(this.errorDemand==""){
      this.demandService.updateListOfMedicineDemand(parseInt(localStorage.getItem('scheduleId')),this.medicineDemand).subscribe(
        data => {
          this.router.navigateByUrl("/schedules/"+scheduleDate);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
