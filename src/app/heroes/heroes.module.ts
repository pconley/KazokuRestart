import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroDashComponent   }  from './hero-dash/hero-dash.component';
import { HeroListComponent   }  from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';

import { HeroService } from './hero-service/hero.service';

import { HeroRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroDashComponent,
    HeroListComponent,
    HeroSearchComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}