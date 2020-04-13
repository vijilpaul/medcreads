import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ReportsComponent]
})
export class ReportsModule { }
