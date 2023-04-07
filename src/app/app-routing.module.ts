import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentativeScheduleComponent } from './Components/representative-schedule/representative-schedule.component';

const routes: Routes = [
  {path:'Schedule/:date',component:RepresentativeScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
