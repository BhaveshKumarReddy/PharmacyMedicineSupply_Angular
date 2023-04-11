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

  medicineStockList:MedicineStock[]=[];
  currentPage:number = 1;
  totalPages:number;

  constructor(private medicineStockDisplayObj:MedicinestockdisplayService,private route:Router){}

  ngOnInit(){
    this.medicineStockDisplayObj.fetchMedicineStock(this.currentPage).subscribe((data:any)=>{
      this.medicineStockList = data.medicineStocks;
      this.currentPage = data.currentPage;
      this.totalPages = data.pages;
    },
    error => {
      console.log(error);
    })
  }

  changePage(page:number){
    this.currentPage = page;
    this.medicineStockDisplayObj.fetchMedicineStock(this.currentPage).subscribe((data:any)=>{
      this.medicineStockList = data.medicineStocks;
      this.currentPage = data.currentPage;
      this.totalPages = data.pages;
    },
    error => {
      console.log(error);
    })
  }
  
  checkLength(){
    if(this.medicineStockList.length>0){
      return true;
    }
    else return false;
  }
}
