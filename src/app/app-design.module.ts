import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
  	MatButtonModule, MatCheckboxModule,
  	MatToolbarModule, MatSidenavModule
  ],
  exports: [
    BrowserAnimationsModule,
  	MatButtonModule, MatCheckboxModule,
  	MatToolbarModule, MatSidenavModule
  ],
})
export class AppDesignModule { }