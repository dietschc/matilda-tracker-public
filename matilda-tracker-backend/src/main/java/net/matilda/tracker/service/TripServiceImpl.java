package net.matilda.tracker.service;

import net.matilda.tracker.entity.Trip;
import net.matilda.tracker.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class TripServiceImpl implements TripService{

    @Autowired
    private TripRepository tripRepository;

    @Override
    public Trip saveTrip(Trip trip) {
        return tripRepository.save(trip);
    }

    @Override
    public List<Trip> fetchAllTrips() {
        List<Trip> allTrips = tripRepository.findTop10ByOrderByTripIdDesc();
        return allTrips;
    }

    @Override
    public Trip getTripById(Long id) {
        Optional<Trip> trip = tripRepository.findById(id);
        if (trip.isPresent()) {
            return trip.get();
        }
        return null;
    }

    @Override
    public Trip updateTripById(Long id, Trip trip) {
        Optional<Trip> trip1 = tripRepository.findById(id);

        if (trip1.isPresent()) {
            Trip originalTrip = trip1.get();

            if (Objects.nonNull(trip.getTripName()) && !"".equalsIgnoreCase(trip.getTripName())) {
                originalTrip.setTripName(trip.getTripName());
                originalTrip.setHasPooped(trip.getHasPooped());
            }

            return tripRepository.save(originalTrip);
        }
        return null;
    }

    @Override
    public String deleteTripById(Long id) {
        if (tripRepository.findById(id).isPresent()) {
            tripRepository.deleteById(id);
            return "Trip deleted successfully";
        }
        return "No such trip in the database";
    }
}
