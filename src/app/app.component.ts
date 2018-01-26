import { Component } from '@angular/core';

import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
      public toasterService: ToasterService
  ){}

    popToast() {
        this.toasterService.pop('success', 'Args Title', 'Args Body');
    }


}