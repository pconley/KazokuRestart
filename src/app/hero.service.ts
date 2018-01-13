import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  list: Hero[] = [];

  constructor(private messageService: MessageService) { }

  getHeroesSynch(): Hero[] {
    return HEROES;
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {

    if( this.list.length > 0 ){
      // only "fetch" if the list has not already been fetched
       this.messageService.add('HeroService: already started');
    } else {
    	this.messageService.add('HeroService: start fetching');

  	  var i = 0;
      var list = this.list;
      var ms = this.messageService;
  	  var interval = setInterval(function(){ adder() }, 1000);
  	  function adder() {
      	list.push(HEROES[i++]);
      	if( i >= HEROES.length ) {
      		clearInterval(interval);
      		ms.add('HeroService: finished fetching');
      	}
      }
  	}
  	return of(this.list);
  }

}
