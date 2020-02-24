import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from './auth.service';
// import { Observable } from 'rxjs'
// import { IDest } from './destination';

const baseUrl = 'https://travel-agency-48209.firebaseio.com/destinations/'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toggle: boolean
  dayHCI: string  
  dayHCO: string 
  dayRCI: string 
  dayRCO: string 
  r: string
  constructor(private http: HttpClient, private authService: AuthService) { }
  
  changeToggle(){
   this.toggle = true
  }
  toggleFalse(){
    this.toggle = false
  }
  getVal(x: string){
      this.r = x
    }
  sendVal(){
    return this.r
  }
  // getById(x : string){
  //   return this.http.get(`${baseUrl}${x}.json`);
  // }
}

