import { Bidder } from './bidder-registration/bidder-registration.component';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs';
import { BidInProcess } from './after-login-bidder/after-login-bidder.component';


@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http: HttpClient) { }

    goRegisterSuccess(bidder: Bidder) : Observable<any> {
      let url= 'http://localhost:8181/bidder-register';
      return this.http.post(url,bidder);
    }

    fetchAllCrops(): Observable<any>{
      let url = 'http://localhost:8181/after-login-bidder';
      return this.http.get<any>(url);
    }

    fetchCropDetails(id:number): Observable<any>{
      let url = 'http://localhost:8181/view-current-bid?sellRequestId='+id;
      return this.http.get<any>(url);
    }

    submitBidForCrop(bid:BidInProcess): Observable<any>{
      let url = 'http://localhost:8181/place-bid';
      return this.http.post<any>(url, bid);

    }



  }
