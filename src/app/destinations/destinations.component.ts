import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { FireServiceService } from '../fire-service.service'
import { IDest } from '../destination'
import { CommonService } from '../common.service';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  data: IDest[]
  constructor(private authService: AuthService, 
              private fireServiceService: FireServiceService,
              private commonService: CommonService,
              private afs: AngularFirestore
              ) { }
  ngOnInit() {
    if(this.authService.isAut()){
      this.fireServiceService.getDestination().subscribe(res => {
        this.data = res
      })
    }
  }
  getDetails(x: string){
    let ind = this.data.findIndex(f => f.id === x)
    return this.data[ind]
  }
  addLike(iTid){
    let ind = this.data.findIndex(f => f.id === iTid)
    let collection = this.data[ind]
    let likes = collection.likes
    likes++
    this.afs.collection('destinations').get().forEach((item) => {
      return item.docs.map(m => {
        return this.afs.doc(`destinations/${iTid}`).update({likes: likes})
      })
    })

  }
    
}
