import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';

import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MessageService } from './message.service';


// var _http = new HttpClient(null);
// var _msvc = new MessageService();

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
      	MessageService,
      	HeroService, HttpClient, HttpHandler,
      	{ provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});

