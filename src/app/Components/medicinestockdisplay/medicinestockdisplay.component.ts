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
  medicinestocklist:MedicineStock[]=[];
  currentPage:number = 1;
  totalPages:number;
  constructor(private medicinestockdisplayobj:MedicinestockdisplayService,private route:Router){}
  ngOnInit(){
    this.medicinestockdisplayobj.fetchMedicineStock(this.currentPage).subscribe((data:any)=>{
      this.medicinestocklist = data.medicineStocks;
      this.currentPage = data.currentPage;
      this.totalPages = data.pages;
    })
  }

  changePage(page:number){
    this.currentPage = page;
    this.medicinestockdisplayobj.fetchMedicineStock(this.currentPage).subscribe((data:any)=>{
      this.medicinestocklist = data.medicineStocks;
      this.currentPage = data.currentPage;
      this.totalPages = data.pages;
    })
  }
}
