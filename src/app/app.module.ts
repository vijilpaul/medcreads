import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavComponent } from './common/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { ReportsModule } from './modules/reports/reports.module';
import { OrganiztonsModule } from './modules/organiztons/organiztons.module';
import { HospitalsModule } from './modules/hospitals/hospitals.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    HomeModule,
    ReportsModule,
    OrganiztonsModule,
    HospitalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
