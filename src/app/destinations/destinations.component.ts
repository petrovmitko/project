import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { FireServiceService } from '../fire-service.service'
import { IDest } from '../destination'
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  data: IDest[]
  
  constructor(private authService: AuthService, 
              private fireServiceService: FireServiceService,
              private http: HttpClientModule) { }

  ngOnInit() {
    if(this.authService.isAut()){
      this.fireServiceService.getDestination().subscribe(res => {
        this.data = res
        console.log(res);
      })
    }
  }

  addLike(){
  
  }
}
