import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CallbackComponent }    from './callback/callback.component';

import { AuthGuard }  from "./guards/auth.guard"
import { UserGuard }  from "./guards/user.guard"
import { AdminGuard } from "./guards/admin.guard"

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomeComponent },
  { path: 'callback',   component: CallbackComponent }, // for auth0
  { path: 'heroes',     component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard, UserGuard, AdminGuard ]
})

export class AppRoutingModule {}