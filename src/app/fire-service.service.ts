import { Injectable } from '@angular/core';
import {  AngularFirestore } from 'angularfire2/firestore'

@Injectable({
  providedIn: 'root'
})

export class FireServiceService{
  destCollection: any
  fireId: string
  constructor(private afs: AngularFirestore) {
    this.destCollection = this.afs.collection('destinations').valueChanges({ idField: 'id' })
   }
   getDestination(){
     return this.destCollection    
   }
   setFireId(d: string){
     this.fireId = d
   }
}
