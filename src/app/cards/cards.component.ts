import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [CommonService]
})
export class CardsComponent implements OnInit {
  hotelORCar = false
  where = ['Maldives', 'Cancun']; // Should be changed to most liked and will be pulled up from the base
  howMuch = [3325, 7200];
  hotels = ['Hilton', 'Ramada', 'Ibis', 'Holliday-Inn', 'Metropolitan'];
  cars = ['Small city car - 4', 'SUV 5', 'Family car 5', 'Minivan 7']
  numbers = Array(8).fill(1).map((x, i) => x += i);
  passangers = Array(7).fill(1).map((x, i) => x += i);
  carDefault = 'Choose a car'
  toggle: boolean
  constructor(private commonService: CommonService) { }
  ngOnInit() {
  }
  hotelCheck(){
    this.hotelORCar = true 
  }
  carCheck(){
    this.hotelORCar = false
  }
  showCalendar(){
    this.toggle = this.toggle === true ? false : true
  }
}


