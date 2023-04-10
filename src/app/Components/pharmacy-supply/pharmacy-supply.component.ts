import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacyMedicineSupply } from 'src/Models/PharmacyMedicineSupply';
import { PharmacyMedicineSupplyService } from 'src/app/Services/PharmacyMedicineSupply/pharmacy-medicine-supply.service';

@Component({
  selector: 'app-pharmacy-supply',
  templateUrl: './pharmacy-supply.component.html',
  styleUrls: ['./pharmacy-supply.component.css']
})
export class PharmacySupplyComponent {
  startDate: string;
  searchValue: string = '';
  currentPage:number = 1;
  totalPages:number;
  supplyMedicines: PharmacyMedicineSupply[] = [];
  formattedDate:any;
  constructor(private route:ActivatedRoute, private router: Router, private supplyService: PharmacyMedicineSupplyService){
    this.startDate = this.route.snapshot.paramMap.get("date")+"";
    this.formattedDate = formatDate(this.startDate,'dd-MM-yyyy','en-US');
    if(localStorage.getItem('newSupply')=="true"){
         supplyService.createPharmacyMedSupply(this.formattedDate).subscribe((data:any) => {
          this.supplyMedicines = data.pharmacyMedSupplies;
          this.currentPage = data.currentPage;
          this.totalPages = data.pages;
          localStorage.setItem('newSupply',false+"");
      },
      error => {
         console.log(error);
      })
    }
    else{
       this.changePage(this.currentPage);
    }
  }

  changePage(page:number){
    this.currentPage = page;
    this.supplyService.alreadySupplied(this.currentPage, this.formattedDate).subscribe(
      (data:any) => {
        this.supplyMedicines = data.pharmacyMedSupplies;
        this.currentPage = data.currentPage;
        this.totalPages = data.pages;
        localStorage.setItem('newSupply',false+"");
      },
      error => {
         console.log(error);
    })
  }

  checkLength(){
    if(this.supplyMedicines.length>0){
      return true;
    }
    else return false;
  }
}