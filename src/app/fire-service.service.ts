import { Injectable } from '@angular/core';
import {  AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { IDest } from './destination'
@Injectable({
  providedIn: 'root'
})

export class FireServiceService{
  // collection: AngularFirestoreCollection<IDest>
  destCollection: Observable<IDest[]>

  constructor(private afs: AngularFirestore) {
    this.destCollection = this.afs.collection('destinations').valueChanges()
   }
   getDestination(){
     return this.destCollection
   }

}

export interface DestId extends IDest { id: string; }