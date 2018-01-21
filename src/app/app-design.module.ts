import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
  	MatButtonModule, MatCheckboxModule,
  	MatToolbarModule, MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
  	MatButtonModule, MatCheckboxModule,
  	MatToolbarModule, MatIconModule
  ],
})
export class AppDesignModule { }