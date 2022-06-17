import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {User} from "../model/user.model";
import {AuthService} from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUser: User = new User;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean 
          | UrlTree> | boolean | UrlTree 
    {

    if (this.currentUser) {
      if (route.data['roles']?.indexOf(this.currentUser.role) === -1) 
      {
        this.router.navigate(['/401']);
        return false;
      }
      return true;
    }

    this.router.navigate(['/login']);
    return true;
  }

}