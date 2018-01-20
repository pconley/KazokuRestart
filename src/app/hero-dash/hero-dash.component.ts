import { Component, OnInit } from '@angular/core';

import { Hero        } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-board',
  templateUrl: './hero-dash.component.html',
  styleUrls: [ './hero-dash.component.css' ]
})
export class HeroDashComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}