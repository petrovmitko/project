import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from './auth.service';


const baseUrl = 'https://travel-agency-48209.firebaseio.com/destinations/'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toggle: boolean
  date: string 
  constructor(private http: HttpClient, private authService: AuthService) { }
  
  changeToggle(){
   return this.toggle = this.toggle === true ? false : true
  }
  toggleFalse(){
    return this.toggle = false
  }
}

