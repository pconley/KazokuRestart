import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../services/hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
	  private route: ActivatedRoute,
	  private heroService: HeroService,
	  private location: Location
  ) {}

  ngOnInit(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	//console.log('*** hero-detail.component init',id)
    this.getHero(id);
  }

  getHero(id): void {
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
   this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
