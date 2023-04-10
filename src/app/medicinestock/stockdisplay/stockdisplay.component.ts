import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineStock } from 'src/Models/MedicineStock';
import { MedicinestockdisplayService } from 'src/app/Services/MedicineStockDisplay/medicinestockdisplay.service';

@Component({
  selector: 'app-stockdisplay',
  templateUrl: './stockdisplay.component.html',
  styleUrls: ['./stockdisplay.component.css']
})
export class StockdisplayComponent {

  medicinestocklist:MedicineStock[]=[];
  currentPage:number = 1;
  totalPages:number;
  constructor(private medicinestockdisplayobj:MedicinestockdisplayService,private route:Router){}
  ngOnInit(){
    this.medicinestockdisplayobj.fetchMedicineStock(this.currentPage).subscribe((data:any)=>{
      this.medicinestocklist = data.medicineStocks;
      this.currentPage = data.currentPage;
      this.totalPages = data.pages;
    },
    error => {
      console.log(error);
    })
  }

  changePage(page:number){
    this.currentPage = page;
    this.medicinestockdisplayobj.fetchMedicineStock(this.currentPage).subscribe((data:any)=>{
      this.medicinestocklist = data.medicineStocks;
      this.currentPage = data.currentPage;
      this.totalPages = data.pages;
    },
    error => {
      console.log(error);
    })
  }
  
  checkLength(){
    if(this.medicinestocklist.length>0){
      return true;
    }
    else return false;
  }
}
