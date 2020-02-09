import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  hotelORCar = false
  where = ['Maldives', 'Cancun']; // Should be changed to most liked and will be pulled up from the base
  howMuch = [3325, 7200];
  hotels = ['Hilton', 'Ramada', 'Ibis', 'Holliday-Inn', 'Metropolitan'];
  cars = ['Small city car - 4', 'SUV 5', 'Family car 5', 'Minivan 7']
  numbers = Array(8).fill(1).map((x, i) => x += i);
  passangers = Array(4).fill(1).map((x, i) => x += i);
  constructor() { }
  ngOnInit() {
  }
  hotelCheck(){
    this.hotelORCar = true 
  }
  carCheck(){
    this.hotelORCar = false
  }

}


