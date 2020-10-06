import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  viewAllRequests(): Observable<any>{
    let url='http://localhost:8181/view-all-requests';
    return this.http.get<any>(url);
  }

}
