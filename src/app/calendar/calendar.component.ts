import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [ CommonService ]
})
export class CalendarComponent implements OnInit {
  // toggle: boolean = true
  date: Date = new Date();
  day: string  
  year = this.date.toString().split(' ')[3]
  indexMonth = this.date.getMonth()
  allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
  month = this.allMonth[this.indexMonth]
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  changeMonth(x: number){
    if(x === 1){
      this.indexMonth++
    }
    else{
      this.indexMonth--
    }
    if(this.indexMonth < 0){
      this.indexMonth = 11
      let st = Number(this.year) -1
      this.year = st.toString()
    }
    if(this.indexMonth > 11){
      this.indexMonth = 0
      let st = Number(this.year) +1
      this.year = st.toString()
    }
    this.month = this.allMonth[this.indexMonth]
  }
  // showCalendar(){
  //   this.toggle = this.toggle === true ? false : true
  // }
  getClickedDate(f: string){
    this.day = `${f}/${this.allMonth.indexOf(this.month) + 1}/${this.year}`
  }
}

