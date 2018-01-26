import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';

import { ToasterService } from 'angular2-toaster';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};  

@Injectable()
export class HeroService {

  private list: Hero[] = [];
  readonly heroesUrl = 'http://localhost:3000/heros';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private toasterService: ToasterService,
  ) { }

  private log(message: string) {
    const text = `Heroes Service: ${message}`
    console.log(`*** ${text}`)
    this.messageService.add(text);
  }
  private alert(message: string){
    this.toast('success', message)
  }
  private error(message: string){
    this.toast('error',message);
  }
  private toast(level: string, message: string){
    this.log(message) // to console and to the message service
    this.toasterService.pop({type: level, title: 'Heroes Service', body: message })
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    const msg = `fetching hero. url = ${url}`
    this.toasterService.pop('success', 'Heroes', msg);
    return this.http.get<Hero>(url).pipe(
      tap(hero => this.log(`fetched hero. name = ${hero.name}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getHeroes (): Observable<Hero[]> {
    this.log(`fetching heroes`);
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heros => this.alert(`fetched ${heros.length} heroes`)),
        catchError(this.handleError('getHeroes', []))
      )
  }

  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string = ""): Observable<Hero[]> {
    if (!term.trim()) {
      console.log("--- no term");
      // if no search term, return empty hero array.
      return of([]);
    }
    const url = `${this.heroesUrl}/?name=${term}`;
    return this.http.get<Hero[]>(url).pipe(
      tap(heros => this.log(`found ${heros.length} heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      this.error(`${operation} failed: ${error.message}`)
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}