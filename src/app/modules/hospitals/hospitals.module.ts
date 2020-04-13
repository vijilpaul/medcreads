import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalsComponent } from './hospitals.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [HospitalsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HospitalsComponent]
})
export class HospitalsModule { }
