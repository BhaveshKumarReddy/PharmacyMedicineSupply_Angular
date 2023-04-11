import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockdisplayComponent } from './stockdisplay/stockdisplay.component';
import { AuthGuardGuard } from '../Guards/auth-guard.guard';

const routes: Routes = [
  {path:'stocks',component: StockdisplayComponent, canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinestockRoutingModule { }
