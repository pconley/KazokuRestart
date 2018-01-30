import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: [ './testpage.component.css' ]
})
export class TestPageComponent implements OnInit {

  profileObs: Observable<any>;

  constructor( private profileService: ProfileService ) { }

  ngOnInit() { }

  get_profile(){

  	console.log("*** testpage#getprofile");
    const id = "bbb@bbb.bbb"; // TODO: current user!!!
    this.profileObs = this.profileService.get(id);
  	console.log("*** profile...", this.profileObs);
  }
}