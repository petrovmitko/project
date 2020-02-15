import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private router: Router) { }

  signUp(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.getIdToken()
        .then((token: string) => {this.token = token;})
        .then(() => {
          this.router.navigate(['/main']);
        })
    })
    .catch(err => console.error(err))
  }

  singIn(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.getIdToken()
        .then((token: string) => {this.token = token;})
        .then(() => {
          this.router.navigate(['/main']);
        })
    })
    .catch(err => console.error(err))
  }
  logOut(){
    firebase.auth().signOut()
    .then(() => {
      this.router.navigate(['/main'])
      this.token = null
    })
  }
  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then((x) => {this.token = x })
    .then(() => { return this.token })
  }

  isAut(){
    return this.token != null ? true : false
  }

}
