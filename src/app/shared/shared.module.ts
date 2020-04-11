import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleDescriptionComponent } from './components/page-title-description/page-title-description.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TabsComponent } from './components/tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [PageTitleDescriptionComponent, ProfileComponent, TabsComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ], 
  exports: [PageTitleDescriptionComponent, ProfileComponent, TabsComponent]
})
export class SharedModule { }
