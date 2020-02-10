import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuCheck: boolean
  loggedIn = false
  constructor() { 
    this.menuCheck = false
  }

  ngOnInit() {
  }

  menuHandler(){
    if(this.menuCheck){
      this.menuCheck = false
    }
    else{
      this.menuCheck = true
    }
  }
}
