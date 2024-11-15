import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'trips', component: TripsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:tripId', component: TripDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }