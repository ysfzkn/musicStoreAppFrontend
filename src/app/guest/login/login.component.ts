import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user.model";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue?.id) {
      this.router.navigate(['/profile']);
      return;
    }
  }

  login() {
    this.authService.login(this.user).subscribe(data => {
      this.router.navigate(['/profile']);
    }, err => {
      this.errorMessage = 'Username or password is incorrect.';
      console.log(err);
    })
  }

}