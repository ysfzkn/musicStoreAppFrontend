import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './model/role.enum';
import { User } from './model/user.model';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'musicStoreAppFrontend';

  currentUser: User = new User;

  constructor(private authenticationService: AuthService, private router: Router) 
  {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  isAdmin() {
    return this.currentUser?.role === Role.ADMIN;
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }
}

