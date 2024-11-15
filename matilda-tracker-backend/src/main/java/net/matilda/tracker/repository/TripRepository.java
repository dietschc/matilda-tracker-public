package net.matilda.tracker.repository;

import net.matilda.tracker.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {

    List<Trip> findTop10ByOrderByTripIdDesc();
}
