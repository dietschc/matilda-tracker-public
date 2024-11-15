import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent {
  @Input() trip?: Trip;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTrip();
  }
  
  getTrip(): void {
    const tripId = Number(this.route.snapshot.paramMap.get('tripId'));
    this.tripService.getTrip(tripId)
      .subscribe(trip => this.trip = trip);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const tripId = Number(this.route.snapshot.paramMap.get('tripId'));
    console.log(this.trip);
    if (this.trip) {
      this.tripService.updateTrip(this.trip, tripId)
        .subscribe(() => this.goBack());
    }
  }

}
