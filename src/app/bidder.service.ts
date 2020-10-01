import { Bidder } from './bidder-registration/bidder-registration.component';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http: HttpClient) { }

    goRegisterSuccess(bidder: Bidder) : Observable<any> {
      let url= 'http://localhost:8181/bidder-register';
      return this.http.post(url,bidder);
    }



  }
