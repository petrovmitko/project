import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuCheck: boolean
  loggedIn = false
  constructor(private authService: AuthService) { 
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
  logout(){
    this.authService.logOut()
  }
}
