import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang:string;
  [x: string]: any;
  title = 'final';
  isAuth: boolean;
  myimage:string = "assets/image/bala.jpeg"
  constructor(){
   var firebaseConfig = {
    apiKey: "AIzaSyD-Ru8lM-YK6SXvjfKYElR1hy3aQyr6QJk",
    authDomain: "app1-caa26.firebaseapp.com",
    databaseURL: "https://app1-caa26-default-rtdb.firebaseio.com",
    projectId: "app1-caa26",
    storageBucket: "app1-caa26.appspot.com",
    messagingSenderId: "969842376309",
    appId: "1:969842376309:web:82cdaa9dee36cfe968423c",
    measurementId: "G-W3JTSV8X9Z"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  }
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth=true;
        } else {
          this.isAuth=false;
        }
      }
    );
    this.lang=localStorage.getItem('lang') || 'fr' ;
    
  }
  changeLang(lang: string){
    localStorage.setItem('lang',lang);
    window.location.reload();
  }
  onSignOut() {
    this.authservice.signOutUser();
  }

}
