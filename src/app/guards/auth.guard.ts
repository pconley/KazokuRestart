import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private AuthService: AuthService) {}

  canActivate() {
  	var ok = this.AuthService.isLoggedIn();
  	console.log("auth guard: authenticated = ",onkeyup);
    return ok;
  }
}