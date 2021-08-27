import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../models/trip';

@Component({
  selector: 'app-my-trips-list-item',
  templateUrl: './my-trips-list-item.component.html',
  styleUrls: ['./my-trips-list-item.component.css']
})
export class MyTripsListItemComponent implements OnInit {

  panelOpenState = false;
  @Input() trip: Trip = {};
  constructor() { }

  ngOnInit(): void {
  }

}
