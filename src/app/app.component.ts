import { Component } from '@angular/core';

// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //members: Observable<any[]>;
  title = 'Kazoku Client Restart';

  // TODO: move navbar to its own component

  isCollapsed = true; // navbar

  constructor(
  	public auth: AuthService,
  	// public db: AngularFirestore
  ){
    //auth.handleAuthentication();

    //this.members = db.collection('members').valueChanges();

  }


  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }


}