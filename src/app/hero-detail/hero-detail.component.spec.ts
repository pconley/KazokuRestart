import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ActivatedRoute } from '@angular/router';

import { Location, LocationStrategy } from "@angular/common";
import { SpyLocation                } from "@angular/common/testing";

import { Hero                } from '../models/hero';
import { HeroService         } from '../services/hero.service';
import { HeroServiceStub     } from '../services/hero.service.stub';
import { HeroDetailComponent } from './hero-detail.component';

//this.route.snapshot.paramMap.get('id')
var activatedRouteStub = {
  snapshot: {
    paramMap: {
      get: function(param){ return 2; }
    }
  }
};

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: HeroService, useClass: HeroServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Location, useClass: SpyLocation },
        { provide: LocationStrategy, useClass: SpyLocation},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //console.log(component);
    expect(component).toBeTruthy();
  });
});

