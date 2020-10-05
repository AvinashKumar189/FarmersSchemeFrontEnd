import { Farmer } from './farmer-registration/farmer-registration.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmerService {
  constructor(private http: HttpClient) {}

  goRegisterSuccess(farmer: Farmer): Observable<any> {
    let url = 'http://localhost:8181/farmer-register';
    return this.http.post<Farmer>(url, farmer);
  }

  viewActiveCrops(id:number): Observable<any>{
    let url = 'http://localhost:8181/view-marketplace?farmerId='+id;
    return this.http.get<any>(url);
  }

  viewPreviousBids(id:number): Observable<any>{
    let url = 'http://localhost:8181/view-previous-bids?sellRequestId='+id;
    return this.http.get<any>(url);

  }

  viewSoldHistory(id:number): Observable<any>{
    let url = 'http://localhost:8181/sold-crop-history?farmerId='+id;
    return this.http.get<any>(url);
  }

}
