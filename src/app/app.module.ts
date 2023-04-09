import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProvidescheduledateComponent } from './Components/providescheduledate/providescheduledate.component';
import { LoginComponent } from './Components/login/login.component';
import { RepresentativeScheduleComponent } from './Components/representative-schedule/representative-schedule.component';
import { MedicinedemandComponent } from './Components/medicinedemand/medicinedemand.component';
import { PharmacySupplyComponent } from './Components/pharmacy-supply/pharmacy-supply.component';
import { HomeComponent } from './Components/home/home.component';
import { MedicinestockdisplayComponent } from './Components/medicinestockdisplay/medicinestockdisplay.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { FilterByStatus } from './Pipes/DateSchedulePipe';
import { FilterByNames } from './Pipes/RepresentativeSchedulePipe';
import { FilterByPharmacy } from './Pipes/PharmacySupplyPipe';
import { PipesLibModule } from 'pipesLib';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProvidescheduledateComponent,
    LoginComponent,
    RepresentativeScheduleComponent,
    MedicinedemandComponent,
    PharmacySupplyComponent,
    HomeComponent,
    MedicinestockdisplayComponent,
    LogoutComponent,
    FilterByStatus,
    FilterByNames,
    FilterByPharmacy
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesLibModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
