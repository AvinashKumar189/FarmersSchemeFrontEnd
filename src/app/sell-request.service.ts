import { SellRequest } from './place-sell-request/place-sell-request.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellRequestService {

  constructor(private http : HttpClient) { }

  goSellRequest(sellRequest : SellRequest) : Observable<any> {
    let url = "http://localhost:8181/place-sell-request";
    return this.http.post(url,sellRequest);
  }
}
