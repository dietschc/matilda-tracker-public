import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips()
      .subscribe(trips => this.trips = trips.slice(0, 4));
  }

  didPoop(hasPooped: boolean): string {
    if (hasPooped)
      return '💩';
    else
      return '😢';
  }
}