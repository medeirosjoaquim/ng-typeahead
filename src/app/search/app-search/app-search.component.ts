import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/models/hotel';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {
  hotelsList: Hotel[];
  constructor() { }

  ngOnInit(): void {
  }
  dataReceived(hotels: Hotel[]){
    this.hotelsList = hotels;
  }
}
