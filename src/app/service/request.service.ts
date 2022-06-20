import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import {AuthService} from "./auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class RequestService {

  protected currentUser: User = new User;

  protected constructor(protected authService: AuthService, protected http: HttpClient) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  get getHeaders(): HttpHeaders 
  {
    return new HttpHeaders(
      {
        authorization: 'Bearer ' + this.currentUser?.token,
        "Content-Type": "application/json; charset=UTF-8"
      }
    );
  }

  get getHeadersUpload(): HttpHeaders
  {
    return new HttpHeaders(
      {
        authorization: 'Bearer ' + this.currentUser?.token
      }
    );
  }
}