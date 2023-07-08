import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.loginService.getIsLoged()){
          this.router.navigate(['/login'])
      }
      return true
  }


};
