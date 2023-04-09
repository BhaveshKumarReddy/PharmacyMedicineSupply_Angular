import { NgModule } from '@angular/core';
import { PipesLibComponent } from './pipes-lib.component';
import { FilterByStatusLib } from './Pipes/DateSchedulePipeLib';
import { FilterByNamesLib } from './Pipes/RepresentativeSchedulePipeLib';
import { FilterByPharmacyLib } from './Pipes/PharmacySupplyPipeLib';

@NgModule({
  declarations: [
    PipesLibComponent,
    FilterByStatusLib,
    FilterByNamesLib,
    FilterByPharmacyLib
  ],
  imports: [
  ],
  exports: [
    PipesLibComponent,
    FilterByStatusLib,
    FilterByNamesLib,
    FilterByPharmacyLib
  ]
})
export class PipesLibModule { }
