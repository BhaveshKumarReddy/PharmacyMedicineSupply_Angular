import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineStock } from 'src/Models/MedicineStock';
import { MedicinestockdisplayService } from 'src/app/Services/MedicineStockDisplay/medicinestockdisplay.service';

@Component({
  selector: 'app-medicinestockdisplay',
  templateUrl: './medicinestockdisplay.component.html',
  styleUrls: ['./medicinestockdisplay.component.css']
})
export class MedicinestockdisplayComponent {
  medicinestocklist:MedicineStock[]=[]
  constructor(private medicinestockdisplayobj:MedicinestockdisplayService,private route:Router){}
  ngOnInit(){
    this.medicinestockdisplayobj.fetchMedicineStockDetails().subscribe(data=>{
      this.medicinestocklist=data
      console.log(this.medicinestocklist)
    })
  }
}
