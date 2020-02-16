import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from './auth.service';


const baseUrl = 'https://travel-agency-48209.firebaseio.com/destinations/'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  
}

