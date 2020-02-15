import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FireServiceService{
  collection: AngularFirestoreCollection
  userCollection: Observable<any>
  destCollection: Observable<any>
  constructor(public afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users').valueChanges()
    this.destCollection = this.afs.collection('destinations').valueChanges()
   }
   getUsers(){
     return this.userCollection
   }
   getDestination(){
     return this.destCollection
   }
}
