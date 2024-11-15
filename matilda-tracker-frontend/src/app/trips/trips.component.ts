import { Component } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  trips: Trip[] = [];

  today = new Date();
  hasPooped = "true";

  constructor(
    private tripService: TripService,
    private router: Router) {}

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips()
    .subscribe(trips => this.trips = trips);
  }

  add(tripName: string, hasPooped: boolean): void {
    tripName = tripName.trim();
    hasPooped = hasPooped;

    if (!tripName) { return; }

    this.tripService.addTrip({ tripName, hasPooped } as Trip)
      .subscribe(trip => {
        this.trips.push(trip);
      });

    // Wait 1 second then navigate back to dashboard after submit
    setTimeout(() => 
      {
          this.router.navigate(['/']);
      },
      2000);
  }

  delete(trip: Trip): void {
    if (confirm("Are you sure you want to delete " + trip.tripName)) {
      this.trips = this.trips.filter(h => h !== trip);
      this.tripService.deleteTrip(trip.tripId).subscribe();
    }
  }

  didPoop(hasPooped: boolean): string {
    if (hasPooped)
      return '💩';
    else
      return '😢';
  }

  stringToBoolean(str: string): boolean {
    return str.toLowerCase() === 'true';
  }

  
}
