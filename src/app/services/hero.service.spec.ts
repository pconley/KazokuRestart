import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Hero           } from '../models/hero';
import { HeroService    } from './hero.service';
import { MessageService } from './message.service';

// demonstrates two ways of getting the service... 1.) saving it in the LET
// for later use in the tests and 2.) to inject it directly into test

describe('HeroService', () => {
  let injector: TestBed;
  let service: HeroService;
  let httpMock: HttpTestingController;

  const dummyHeroes = [
    { id: 91, name: 'John' },
    { id: 92, name: 'Doe' }
  ];

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, MessageService]
    });
    injector = getTestBed();
    service = injector.get(HeroService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    // to clear any extra requests
    httpMock.verify();
  });

  describe('the basics', () => {
    // deomostrates the injection of the service at the IT level
    it('should be created', inject([HeroService], (service: HeroService) => {
      expect(service).toBeTruthy();
    }));
    it('should have api calls', inject([HeroService], (service: HeroService) => {
      //expect(service.putHero).toBeFalsy(); // negative test
      expect(service.getHero).toBeTruthy();
      expect(service.addHero).toBeTruthy();
      expect(service.updateHero).toBeTruthy();
      expect(service.deleteHero).toBeTruthy();
      expect(service.searchHeroes).toBeTruthy();
    }));
  });

  describe('#getHero', () => {
    it('should return an Observable<Hero>', () => {
      const hero_id = 98;
      const dummyHero =  new Hero("capatain", hero_id);
      service.getHero(hero_id).subscribe(hero => {
        expect(hero).toEqual(dummyHero);
      });
      const req_url = `${service.HEROES_URL}/${hero_id}`
      const req = httpMock.expectOne(req_url);
      expect(req.request.method).toBe("GET");
      req.flush(dummyHero); // fires request
    });
  });

  describe('#getHeroes', () => {
    it('should return an Observable<Hero[]>', () => {

      service.getHeroes().subscribe(heros => {
        expect(heros.length).toBe(dummyHeroes.length);
        expect(heros).toEqual(dummyHeroes);
      });

      const req = httpMock.expectOne(service.HEROES_URL);
      expect(req.request.method).toBe("GET");
      req.flush(dummyHeroes); // fires request
    });
  });

});

