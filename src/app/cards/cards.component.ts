import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
import { AuthService } from '../auth.service'
import { FireServiceService } from '../fire-service.service'
import { IDest } from '../destination'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  hotelORCar = false
  hotels = ['Hilton', 'Ramada', 'Ibis', 'Holliday-Inn', 'Metropolitan'];
  destinationOptions = ['cancun', 'plitvice lakes', 'maldives', 'santorini', 'barcelona', 'bali']
  cars = ['No', 'Small city car - 4', 'SUV 5', 'Family car 5', 'Minivan 6 + 1', 'Bus 8 + 1']
  numbers = Array(8).fill(1).map((x: number, i) => x += i);
  passangers = Array(12).fill(1).map((y: number, i) => y += i);
  carDefault = 'Choose a car'
  collection: IDest[]
  idDest: any
  constructor(private commonService: CommonService, 
              private authService: AuthService, 
              private fireServiceService: FireServiceService) { 
    
  }
  ngOnInit() {
    if(this.authService.isAut()){
      this.fireServiceService.getDestination().subscribe(data => {
        this.collection = data
        this.collection = this.collection.sort((a, b) => b.likes - a.likes)
      })
    }
  }
  hotelCheck(){
    this.hotelORCar = true 
  }
  carCheck(){
    this.hotelORCar = false
  }
  getUrlS(){
    if(this.authService.isAut()){
      return `url(${this.collection[0].imageURL})`
    }
    return `url(/assets/img/maldives.jpg)`
  }
  getUrlT(){
    if(this.authService.isAut()){
      return `url(${this.collection[1].imageURL})`
    }
    return `url(/assets/img/cancun.jpg)`
  }
}
