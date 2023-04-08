import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { ProvidescheduledateComponent } from './Components/providescheduledate/providescheduledate.component';
import { LoginComponent } from './Components/login/login.component';
import { RepresentativeScheduleComponent } from './Components/representative-schedule/representative-schedule.component';
import { MedicinedemandComponent } from './Components/medicinedemand/medicinedemand.component';
import { PharmacySupplyComponent } from './Components/pharmacy-supply/pharmacy-supply.component';
import { HomeComponent } from './Components/home/home.component';
import { MedicinestockdisplayComponent } from './Components/medicinestockdisplay/medicinestockdisplay.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'provideschedule',component:ProvidescheduledateComponent},
  {path:'login',component:LoginComponent},
  {path:'schedules/:date',component:RepresentativeScheduleComponent},
  {path:'medicinedemand/:id',component:MedicinedemandComponent},
  {path:'supply/:date',component:PharmacySupplyComponent},
  {path:'medicinestocks',component:MedicinestockdisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
