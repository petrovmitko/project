import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { FireServiceService } from '../fire-service.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dataById: any
  arr: string[]
  comments: string[]
  constructor(private authService: AuthService, private fss: FireServiceService) { }

  ngOnInit() {
    if(this.authService.isAut()){
      this.fss.getDestination().subscribe(res => {
        let i = res.findIndex(x => x.id === this.fss.fireId)
        this.dataById = res[i]
        this.arr = this.dataById.imgArr
        this.comments = this.dataById.comments
      })
    }
  }
}
