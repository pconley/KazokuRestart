import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './views/about/about.component';
import { LoginComponent }       from './views/login/login.component';
import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroDashComponent }    from './hero-dash/hero-dash.component';
import { MemberListComponent }  from './member-list/member-list.component';
import { SettingsComponent }    from './settings/settings.component';
import { MessagesComponent }    from './messages/messages.component';

import { AuthGuard }  from "./guards/auth.guard"
import { UserGuard }  from "./guards/user.guard"
import { AdminGuard } from "./guards/admin.guard"

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomeComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'members',    component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'herodash',   component: HeroDashComponent, canActivate: [AuthGuard] },
  { path: 'herolist',   component: HeroListComponent, canActivate: [AuthGuard] },
  { path: 'hero/:id',   component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'settings',   component: SettingsComponent },
  { path: 'messages',   component: MessagesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard, UserGuard, AdminGuard ]
})

export class AppRoutingModule {}