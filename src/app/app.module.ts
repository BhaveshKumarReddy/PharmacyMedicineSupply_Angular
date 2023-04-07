import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepresentativeScheduleComponent } from './Components/representative-schedule/representative-schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicinedemandComponent } from './Components/medicinedemand/medicinedemand.component';
import { FormsModule } from '@angular/forms';
import { PharmacySupplyComponent } from './Components/pharmacy-supply/pharmacy-supply.component';

@NgModule({
  declarations: [
    AppComponent,
    RepresentativeScheduleComponent,
    MedicinedemandComponent,
    PharmacySupplyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
