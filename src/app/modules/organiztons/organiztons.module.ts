import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganiztonsComponent } from './organiztons.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [OrganiztonsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [OrganiztonsComponent]
})
export class OrganiztonsModule { }
