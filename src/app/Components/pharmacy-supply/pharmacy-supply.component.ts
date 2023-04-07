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
  supplyMedicines: PharmacyMedicineSupply[] = [];
  constructor(private route:ActivatedRoute, private router: Router, private supplyService: PharmacyMedicineSupplyService){
    this.startDate = this.route.snapshot.paramMap.get("date")+"";
    var formattedDate = formatDate(this.startDate,'dd-MM-yyyy','en-US');
    if(localStorage.getItem('newSupply')=="true"){
         supplyService.createPharmacyMedSupply(formattedDate).subscribe(data => {
         console.log(data);
         this.supplyMedicines = data;
         localStorage.setItem('newSupply',false+"");
      },
      error => {
         console.log(error);
      })
    }
    else{
      supplyService.alreadySupplied(formattedDate).subscribe(data=>{
        console.log(data);
        this.supplyMedicines = data;
        localStorage.setItem('newSupply',false+"");
      },
      error => {
         console.log(error);
      })
    }
  }

}
