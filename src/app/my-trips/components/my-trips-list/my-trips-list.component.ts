import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Trip } from '../../models/trip';

@Component({
  selector: 'app-my-trips-list',
  templateUrl: './my-trips-list.component.html',
  styleUrls: ['./my-trips-list.component.css'],
})
export class MyTripsListComponent implements OnInit {
  trips: Trip[] = [
    {
      status: true,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'Town',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'Mountians',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'River',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'Sea',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: false,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: false,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: true,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
    {
      status: false,
      name: 'Lake',
      region: 'region',
      amount_days: 5,
      price: 100,
      kind_of_trip: 'cycling',
    },
  ];

  tripsSlice: Trip[] = this.trips.slice(0,5);
  searchTrip: string = '';
  constructor() {}

  ngOnInit(): void {}

  pageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.trips.length) endIndex = this.trips.length;
    this.tripsSlice = this.trips.slice(startIndex, endIndex);
  }
}
