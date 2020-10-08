import { Crop } from './sell-request-admin-dashboard/sell-request-admin-dashboard.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './admin-login/admin-login.component';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  viewAllRequests(id:string): Observable<any>{
    let url='http://localhost:8181/view-all-requests?admin='+id;
    return this.http.get<any>(url);
  }

  adminLogin(user : User): Observable<any> {
    let url='http://localhost:8181/admin-login';
    return this.http.post(url,user);
  }

  approveFarmer(id:number): Observable<any> {
    let url='http://localhost:8181/approve-farmer?farmerId='+id;
    return this.http.get<any>(url);
  }

  approveBidder(id:number): Observable<any> {
    let url='http://localhost:8181/approve-bidder?bidderId='+id;
    return this.http.get<any>(url);
  }

  approveSellRequest(id:number): Observable<any> {
    let url='http://localhost:8181/approve-sell-request?requestId='+id;
    return this.http.get<any>(url);
  }

  approveBiddingRequest(id:number): Observable<any> {
    let url='http://localhost:8181/approve-bidding-request?requestId='+id;
    return this.http.get<any>(url);
  }

  setBiddingDeadline(crop:Crop): Observable<any> {
    let url = 'http://localhost:8181/set-bidding-deadline';
    return this.http.post<any>(url, crop);
  }

  closeBiddingForCrop(id:number): Observable<any> {
    let url = 'http://localhost:8181/close-bidding?requestId='+id;
    return this.http.get<any>(url);
  }

  getFarmerDetails(id:number): Observable<any> {
    let url = 'http://localhost:8181/get-farmer-details?farmerId='+id;
    return this.http.get<any>(url);
  }

  getBidderDetails(id:number): Observable<any> {
    let url = 'http://localhost:8181/get-bidder-details?bidderId='+id;
    return this.http.get<any>(url);
  }



}
