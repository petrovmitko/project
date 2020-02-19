import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  register(form: NgForm){
    const email = form.value.email 
    const pass = form.value.password
    this.authService.signUp(email, pass)
  }
}
