import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toggle: boolean
  constructor() {
    this.toggle = false
   }
  
}
