import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';

@Injectable()
export class HeroServiceStub {

  private heros: Hero[] = [
  	{ id: 91, name: "91Man"},
  	{ id: 92, name: "92Woman"}
  ];

  constructor() { }

  getHero(id: number): Observable<Hero> {
    console.log(`stub: get hero: id = ${id}`);
    let h: Hero = new Hero();
    h.id = id;
    h.name = "StubHero";
    return of(h);
  }

  getHeroes (): Observable<Hero[]> {
    console.log(`stub: getHeroes heroes`);
    return of(this.heros);
  }

  // updateHero (hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }

  // deleteHero (hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.heroesUrl}/${id}`;

  //   return this.http.delete<Hero>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }

  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if no search term, return empty hero array.
  //     return of([]);
  //   }
  //   const url = `${this.heroesUrl}/?name=${term}`;
  //   return this.http.get<Hero[]>(url).pipe(
  //     tap(heros => this.log(`found ${heros.length} heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }

}