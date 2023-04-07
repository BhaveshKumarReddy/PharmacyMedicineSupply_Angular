import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pharmacy-supply',
  templateUrl: './pharmacy-supply.component.html',
  styleUrls: ['./pharmacy-supply.component.css']
})
export class PharmacySupplyComponent {
  startDate: string;
  constructor(private route:ActivatedRoute, private router: Router){
    console.log(localStorage.getItem('newSupply'))
    this.startDate = this.route.snapshot.paramMap.get("date")+"";
    console.log(this.startDate);
  }
}
