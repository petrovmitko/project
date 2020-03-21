import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  currentEmail: string | null
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
          this.currentEmail = email
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
      this.currentEmail = null
    })
  }
  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then((res) => this.token = res)
    .then((x) => { return x })
    .catch((err) => console.error(err))
  }
  isAut(){
    return this.token != null ? true : false
  }

}
