import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'; 
//import { HttpModule } from '@angular/http'; // for auth0 ???
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    // HttpModule, <<- the auth0 used this ???
    AppRoutingModule
  ],
  providers: [ AuthService, HeroService, MessageService, ],
  bootstrap: [ AppComponent ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
