import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isCollapsed = true; // navbar menu 

  constructor( public auth: AuthService ){}
  
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {}

}
