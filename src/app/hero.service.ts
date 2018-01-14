import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};  

@Injectable()
export class HeroService {

  private list: Hero[] = [];
  private heroesUrl = 'http://localhost:3000/heros';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    console.log(`*** HeroService: ${message}`)
    // a local log utility
    this.messageService.add('HeroService: ' + message);
  }

  getHeroesSynch(): Hero[] {
    return HEROES;
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    this.log(`fetching heroes. url = ${url}`);
    return this.http.get<Hero>(url).pipe(
      tap(hero => this.log(`fetched hero. name = ${hero.name}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getHeroes (): Observable<Hero[]> {
    this.log(`fetching heroes`);

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heros => this.log(`fetched ${heros.length} heroes`)),
        catchError(this.handleError('getHeroes', []))
      )
  }

  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
