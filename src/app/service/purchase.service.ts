import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {RequestService} from "./request.service";
import {AuthService} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import {Purchase} from "../model/purchase.model";
import {Observable} from "rxjs";

const API_URL = `${environment.BASE_URL}/purchase-history`

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends RequestService
{

  constructor(authService: AuthService, http: HttpClient) 
  {
    super(authService, http);
  }

  savePurchase(purchase: Purchase): Observable<any> 
  {
    return this.http.post(API_URL, purchase, {headers: this.getHeaders});
  }

  getAllPurchaseItems(): Observable<any> 
  {
    return this.http.get(API_URL, {headers: this.getHeaders});
  }
}