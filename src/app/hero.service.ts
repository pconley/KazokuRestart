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

  getHeroes(): Observable<Hero[]> {

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
  	return of(this.list);
  }

}
