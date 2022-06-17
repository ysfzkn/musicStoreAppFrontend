import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {RequestService} from "./request.service";
import {AuthService} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import {Instrument} from "../model/instrument.model";
import {Observable} from "rxjs";

const API_URL = `${environment.BASE_URL}/instrument`;

@Injectable({
  providedIn: 'root'
})
export class InstrumentService extends RequestService
{

  constructor(authService: AuthService, http: HttpClient) 
  {
    super(authService, http);
  }

  saveInstrument(instrument: Instrument): Observable<any> 
  {
    return this.http.post(API_URL, instrument, {headers: this.getHeaders});
  }

  deleteInstrument(instrument: Instrument): Observable<any> 
  {
    return this.http.delete( `${API_URL}/${instrument.id}`, {headers: this.getHeaders});
  }

  getAllInstruments(): Observable<any> 
  {
    return this.http.get(API_URL);
  }
}