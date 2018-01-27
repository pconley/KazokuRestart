import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }  from "../guards/auth.guard"

import { HeroListComponent   }  from './hero-list/hero-list.component';
import { HeroDashComponent   }  from './hero-dash/hero-dash.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'herodash',   component: HeroDashComponent, canActivate: [AuthGuard] },
  { path: 'herolist',   component: HeroListComponent, canActivate: [AuthGuard] },
  { path: 'hero/:id',   component: HeroDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }