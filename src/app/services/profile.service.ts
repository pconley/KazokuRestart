import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ProfileService {

	usersRef : any;

  	constructor( public db: AngularFirestore ) { 

  	    this.usersRef = db.collection('users');
	}

  	get( id: string ){

    	var profileRef = this.usersRef.doc(id); // reference to the doc

	    return profileRef.valueChanges(); 		// return Observable<any>
  }
}