import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { RepresentativeScheduleComponent } from './Components/representative-schedule/representative-schedule.component';
import { MedicinedemandComponent } from './Components/medicinedemand/medicinedemand.component';
import { PharmacySupplyComponent } from './Components/pharmacy-supply/pharmacy-supply.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'schedules/:date',component:RepresentativeScheduleComponent},
  {path:'medicinedemand/:id',component:MedicinedemandComponent},
  {path:'supply/:date',component:PharmacySupplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
