import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { ProvidescheduledateComponent } from './Components/providescheduledate/providescheduledate.component';


const routes: Routes = [
  {path:'provideschedule',component:ProvidescheduledateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
