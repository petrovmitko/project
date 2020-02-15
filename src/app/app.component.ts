import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private commonService: CommonService){}
  title = 'project';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDvL_f5Of0EO7e371WnFMeSAZzd4r0i_Lw",
      authDomain: "travel-agency-48209.firebaseapp.com"
    })
  }
}
