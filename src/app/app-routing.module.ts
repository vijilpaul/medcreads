import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { OrganiztonsComponent } from './modules/organiztons/organiztons.component';
import { HospitalsComponent } from './modules/hospitals/hospitals.component';
import { ReportsComponent } from './modules/reports/reports.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'organiztons', component: OrganiztonsComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
