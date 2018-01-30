import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './views/about/about.component';
import { LoginComponent }       from './views/login/login.component';
import { MemberListComponent }  from './member-list/member-list.component';
import { SettingsComponent }    from './settings/settings.component';
import { MessagesComponent }    from './messages/messages.component';
import { TestPageComponent  }   from './views/testpage/testpage.component';
import { ErrorPageComponent }   from './views/error-page/error-page.component';
import { ContactComponent   }   from './views/contact/contact.component';

import { AuthGuard }  from "./guards/auth.guard"
import { UserGuard }  from "./guards/user.guard"
import { AdminGuard } from "./guards/admin.guard"

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomeComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'test',       component: TestPageComponent },
  { path: 'members',    component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'settings',   component: SettingsComponent },
  { path: 'messages',   component: MessagesComponent },
  { path: 'contact',    component: ContactComponent },
  { path: '**',         component: ErrorPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard, UserGuard, AdminGuard ]
})

export class AppRoutingModule {}