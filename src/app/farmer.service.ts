import { Farmer } from './farmer-registration/farmer-registration.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http : HttpClient) { }

  goRegisterSuccess(farmer: Farmer) : Observable<any> {
    let url = "http://localhost:8181/farmer-register";
    return this.http.post<Farmer>(url,farmer);
    }
}
