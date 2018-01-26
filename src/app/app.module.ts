import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './views/login/login.component';

import { HeroListComponent   } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDashComponent   } from './hero-dash/hero-dash.component';

import { MessagesContent, MessagesComponent   } from './messages/messages.component';

import { MemberListComponent } from './member-list/member-list.component'; // ?????

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './views/about/about.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ContactComponent } from './views/contact/contact.component';

import {ToasterModule, ToasterService} from 'angular2-toaster';

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
    MessagesContent, MessagesComponent,
    SettingsComponent,
    AboutComponent,
    TopbarComponent,
    ErrorPageComponent,
    ContactComponent
  ],
  entryComponents: [MessagesContent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    ToasterModule, BrowserAnimationsModule
  ],
  providers: [ AuthService, HeroService, MessageService, ToasterService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
