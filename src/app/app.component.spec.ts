import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent }      from './app.component';
import { MessagesComponent } from './messages/messages.component';

import { AuthService }    from './auth/auth.service';
import { MessageService } from './services/message.service';

var authServiceStub = {
  //isAuthenticated: true,
  user: { name: 'Test User'},
  isAuthenticated: function(){ return true; },
  handleAuthentication: function(){}
};

var messageServiceStub = {
  messages: ["test message"],
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, MessagesComponent ],
      imports: [ RouterTestingModule ],
      // Do not provide the real services... use the stub value above
      providers:    [ 
        {provide: AuthService, useValue: authServiceStub },
        {provide: MessageService, useValue: messageServiceStub },
       ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have correct title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Kazoku Client Restart');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);

    // var component = fixture.componentInstance;
    // component.title = 'Hello there!' // <-- this is required!


    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Kazoku Client Restart');
  }));
});
