import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  regexPatt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  constructor(private authService: AuthService) { 
  }
  ngOnInit() {
   
  }
  login(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.singIn(email, password)
  }
}
