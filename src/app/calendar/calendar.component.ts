import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date: Date = new Date();
  year = this.date.toString().split(' ')[3]
  indexMonth = this.date.getMonth()
  allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
  month = this.allMonth[this.indexMonth]
  constructor(private commonService: CommonService) { }
  ngOnInit() {}

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
      let st = Number(this.year) + 1
      this.year = st.toString()
    }
    this.month = this.allMonth[this.indexMonth]
  }
  getClickedDate(f: string){
    let d = `${f} / ${this.allMonth.indexOf(this.month) + 1} / ${this.year}`
    this.commonService.toggleFalse()
    let val = this.commonService.sendVal()
    if(val === 'RCI'){
      this.commonService.dayRCI = d
    }
    else if(val === 'RCO'){
      if(this.commonService.dayRCI === ''){
        return this.commonService.dayRCO = 'set start date'
      }
      else if(this.commonService.dayRCI !== ''){
        let splitStartDate = this.commonService.dayRCI.split(' / ').map(x => Number(x))
        let splitEndDate = d.split(' / ').map(x => Number(x))
        if(splitStartDate[2] > splitEndDate[2]){
          return this.commonService.dayRCO = 'set correct date'
        }
        else if(splitStartDate[1] > splitEndDate[1] && splitStartDate[2] >= splitEndDate[2]){
          return this.commonService.dayRCO = 'set correct date'
        }
        else if(splitStartDate[0] > splitEndDate[0] && splitStartDate[1] >= splitEndDate[1] && splitStartDate[2] >= splitEndDate[2]){
          return this.commonService.dayRCO = 'set correct date'
        }
      }
      return this.commonService.dayRCO = d
    }
  }

  checkThirtyOne(){
    if(this.indexMonth === 0 || this.indexMonth === 2 || this.indexMonth === 4 || this.indexMonth === 6 ||this.indexMonth === 7 || this.indexMonth === 9 || this.indexMonth === 11){
      return true
    }
    return false
  }
  checkThirty(){
    if(this.indexMonth === 1){
      return false
    }
    return true
  }
  checkLeap(){
    let x = Number(this.year)
    if(this.indexMonth !== 1){
      return true
    }
    else if(x % 4 === 0 && x % 100 !== 0){
      return true
    }
    else if(x % 400 === 0){
      return true
    }
    return false
  }
  
}

