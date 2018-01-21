import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';
import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './views/login/login.component';

import { HeroListComponent   } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDashComponent   } from './hero-dash/hero-dash.component';

import { MessagesComponent   } from './messages/messages.component';

import { MemberListComponent } from './member-list/member-list.component'; // ?????

import { AppDesignModule } from './app-design.module'; // material design modules

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroDashComponent,
    HeroSearchComponent,
    MemberListComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppDesignModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFontAwesomeModule
  ],
  providers: [ AuthService, HeroService, MessageService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
