import { ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';

import { Hero                } from '../models/hero';
import { HeroService         } from '../services/hero.service';
import { HeroServiceStub     } from '../services/hero.service.stub';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { DashboardComponent  } from './dashboard.component';

describe('HeroDashComponent', () => {
  let component: HeroDashComponent;
  let fixture: ComponentFixture<HeroDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, HeroDetailComponent, HeroSearchComponent ],
      //imports: [ RouterTestingModule ],
      imports: [
        //CommonModule,
        FormsModule,
        //routerLink="/detail/{{hero.id}}"
        RouterTestingModule.withRoutes([
          { path: 'detail/:id', component: HeroDetailComponent }
        ])
      ],
      providers: [
        { provide: HeroService, useClass: HeroServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dashboard', () => {
    expect(component).toBeTruthy();
  });
});
