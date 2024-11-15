package net.matilda.tracker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long tripId;
    private String tripName;
    private Boolean hasPooped;

    public Trip() {
    }

    public Trip(Long tripId, String tripName, Boolean hasPooped) {
        this.tripId = tripId;
        this.tripName = tripName;
        this.hasPooped = hasPooped;
    }

    public Long getTripId() {
        return tripId;
    }

    public void setTripId(Long tripId) {
        this.tripId = tripId;
    }

    public String getTripName() {
        return tripName;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    public Boolean getHasPooped() {
        return hasPooped;
    }

    public void setHasPooped(Boolean hasPooped) {
        this.hasPooped = hasPooped;
    }
}
