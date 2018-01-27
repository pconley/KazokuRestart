import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToasterModule, ToasterService} from 'angular2-toaster';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './views/login/login.component';

import { HeroesModule     } from './heroes/heroes.module'
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { MessagesContent, MessagesComponent   } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component'; // ?????

import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './views/about/about.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
    HeroesModule, // before AppRouting!!!
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    ToasterModule, BrowserAnimationsModule
  ],
  providers: [ AuthService, MessageService, ToasterService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
