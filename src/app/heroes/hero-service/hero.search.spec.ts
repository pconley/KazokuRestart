import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Hero           } from '../models/hero';
import { HeroService    } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService: Search', () => {
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
  describe('#searchHeroes', () => {

    describe('with no term', () => {
      it('should return an empty array', () => {
        const term = ""; // no term >> no results
        service.searchHeroes(term).subscribe(heros => {
          expect(heros.length).toBe(0);
        });
        // NOTE: no http request will be sent w/out a term so
        // we have to confirm that no request is actually sent
        const req_url = `${service.HEROES_URL}/?name=${term}`
        httpMock.expectNone(req_url);
      });
    });

    describe('with some term', () => {
      it('should return an Observable<Hero[]>', () => {
        const term = "some term";
        service.searchHeroes(term).subscribe(heros => {
          expect(heros.length).toBe(dummyHeroes.length);
        });
        const req_url = `${service.HEROES_URL}/?name=${term}`
        const req = httpMock.expectOne(req_url);
        expect(req.request.method).toBe("GET");
        req.flush(dummyHeroes); // fires request
      });
    });
  });


});

