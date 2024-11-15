package net.matilda.tracker.controller;

import net.matilda.tracker.entity.Trip;
import net.matilda.tracker.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TripController {

    @Autowired
    private TripService tripService;

    @PostMapping("/trip")
    public Trip saveTrip(@RequestBody Trip trip) {
        return tripService.saveTrip(trip);
    }

    @GetMapping("/trip")
    public List<Trip> getAllTrips() {
        return tripService.fetchAllTrips();
    }

    @GetMapping("/trip/{id}")
    public Trip getTripById(@PathVariable("id") Long id) {
        return tripService.getTripById(id);
    }

    @PutMapping("/trip/{id}")
    public Trip updateTrip(@PathVariable("id") Long id, @RequestBody Trip trip) {
        return tripService.updateTripById(id, trip);
    }

    @DeleteMapping("/trip/{id}")
    public ResponseEntity<?> deleteTrip(@PathVariable("id") Long id) {
        tripService.deleteTripById(Long.valueOf(id));
        return ResponseEntity.noContent().build();
    }
}