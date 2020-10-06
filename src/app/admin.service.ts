import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './admin-login/admin-login.component';
import { Crop } from './admin-dashboard/admin-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  viewAllRequests(): Observable<any>{
    let url='http://localhost:8181/view-all-requests';
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



}
