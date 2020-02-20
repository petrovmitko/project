import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IDest } from './destination'
@Injectable({
  providedIn: 'root'
})
export class FireServiceService{
  collection: AngularFirestoreCollection<IDest>
  destCollection: Observable<IDest[]>
  constructor(public afs: AngularFirestore) {
    this.destCollection = this.afs.collection('destinations').valueChanges()
   }
   getDestination(){
     return this.destCollection
   }
   
}
