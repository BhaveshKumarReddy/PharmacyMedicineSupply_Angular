import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockdisplayComponent } from './stockdisplay/stockdisplay.component';

const routes: Routes = [
  {path:'stocks',component: StockdisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinestockRoutingModule { }
