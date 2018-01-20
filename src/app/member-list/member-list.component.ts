import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

//import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Observable<any[]>;

  constructor( public db: AngularFirestore ) { }

  ngOnInit() { 
  	this.members = this.db.collection('members').valueChanges();
  }

}




