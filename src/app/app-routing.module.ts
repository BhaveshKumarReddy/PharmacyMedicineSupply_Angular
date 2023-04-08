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
import { LogoutComponent } from './Components/logout/logout.component';
import { AuthGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'provideschedule',component:ProvidescheduledateComponent,canActivate:[AuthGuard]},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGuard]},
  {path:'schedules/:date',component:RepresentativeScheduleComponent,canActivate:[AuthGuard]},
  {path:'medicinedemand/:id',component:MedicinedemandComponent,canActivate:[AuthGuard]},
  {path:'supply/:date',component:PharmacySupplyComponent,canActivate:[AuthGuard]},
  {path:'medicinestocks',component:MedicinestockdisplayComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
