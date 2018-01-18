//import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';

import { HeroService         } from '../services/hero.service';
import { HeroServiceStub     } from '../services/hero.service.stub';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

import { HeroesComponent  } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, HeroDetailComponent, HeroSearchComponent ],
      imports: [
        FormsModule,
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
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dashboard', () => {
    expect(component).toBeTruthy();
  });
});
