package net.matilda.tracker.service;

import net.matilda.tracker.entity.Trip;
import java.util.List;

public interface TripService {
    Trip saveTrip(Trip trip);
    List<Trip> fetchAllTrips();
    Trip getTripById(Long id);
    Trip updateTripById(Long id, Trip trip);
    String deleteTripById(Long id);  
}
