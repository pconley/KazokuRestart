import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;
      this.user.subscribe(
        (user) => {
          console.log("*** auth service constructor. user...",user);
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          } else {
            this.userDetails = null;
          }
        }
      );
  }

  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithGithub() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    console.log("*** signInRegular: credential...", credential);
    //return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)

    this._firebaseAuth.auth.signInAndRetrieveDataWithCredential(credential)
    //firebase.auth().signInAndRetrieveDataWithCredential(credential)
    .then(function(userCredential) {
      console.log("*** signInRegular: info...",userCredential.additionalUserInfo);
    })
    .then((res) => this.router.navigate(['/']));

    return null;
  }

  isLoggedIn() {
    var logged_in = this.userDetails != null;
    return logged_in;
  }

  logout() {
    console.log("*** logout");
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
}
