import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private tripsUrl = 'http://localhost:8080/trip';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }
    
  /** GET trips from the server */
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl)
    .pipe(
      tap(_ => console.log('fetched trips')),
      catchError(this.handleError<Trip[]>('getTrips', []))
    );
  }

  /** GET trip by tripId. Will 404 if tripId not found */
  getTrip(tripId: number): Observable<Trip> {
    const url = `${this.tripsUrl}/${tripId}`;
    return this.http.get<Trip>(url).pipe(
      tap(_ => console.log(`fetched trip tripId=${tripId}`)),
      catchError(this.handleError<Trip>(`getTrip tripId=${tripId}`))
    );
  }

  /** POST: add a new trip to the server */
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.tripsUrl, trip, this.httpOptions).pipe(
      tap((newTrip: Trip) => console.log(`added trip w/ tripId=${newTrip.tripId}`)),
      catchError(this.handleError<Trip>('addTrip'))
    );
  }

  /** PUT: update the trip on the server */
  updateTrip(trip: Trip, tripId: number): Observable<any> {
    const url = `${this.tripsUrl}/${tripId}`;
    return this.http.put(url, trip, this.httpOptions).pipe(
      tap(_ => console.log(`updated trip tripId=${trip.tripId}`)),
      catchError(this.handleError<any>('updatTrip'))
    );
  }

  /** DELETE: delete the trip from the server */
  deleteTrip(tripId: number): Observable<Trip> {
    const url = `${this.tripsUrl}/${tripId}`;
    return this.http.delete<Trip>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted trip tripId=${tripId}`)),
      catchError(this.handleError<Trip>('deleteTrip'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
