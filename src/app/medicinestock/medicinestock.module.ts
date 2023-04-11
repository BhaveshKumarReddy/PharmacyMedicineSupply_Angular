import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinestockRoutingModule } from './medicinestock-routing.module';
import { StockdisplayComponent } from './stockdisplay/stockdisplay.component';


@NgModule({
  declarations: [
    StockdisplayComponent
  ],
  imports: [
    CommonModule,
    MedicinestockRoutingModule
  ],
  exports: [
    StockdisplayComponent
  ]
})
export class MedicinestockModule { }
