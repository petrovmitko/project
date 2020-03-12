import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { FireServiceService } from '../fire-service.service'
import { IDest } from '../destination'
import { CommonService } from '../common.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  data: IDest[]
  currentDestId: string
  commToggle: boolean = false
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
  toggleCommentOpen(itemId){
    this.commToggle = true
    this.currentDestId = itemId
  }
  toggleCommentClose(){
    this.commToggle =  false
  }
  sendComment(form: NgForm){
    const name = form.value.name
    const commentText = form.value.commentText

    let index = this.data.findIndex(f => f.id === this.currentDestId)
    let collection = this.data[index]
    let comments = collection.comments
    let c = `${name}<<>${commentText}`
    comments.push(c)
    this.afs.collection('destinations').get().forEach((item) => {
      return item.docs.map(m => {
        return this.afs.doc(`destinations/${this.currentDestId}`).update({comments: comments})
      })
    })

    this.commToggle =  false
  }
    
}
