import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http : HttpClient) { }
  
  checkMail(email : String) : Observable<any> {
    let url = "http://localhost:8181/forgot-password?email=" + email;
    return this.http.get(url);
  }

}
