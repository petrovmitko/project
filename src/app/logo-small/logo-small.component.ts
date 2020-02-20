import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-logo-small',
  templateUrl: './logo-small.component.html',
  styleUrls: ['./logo-small.component.scss']
})
export class LogoSmallComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
