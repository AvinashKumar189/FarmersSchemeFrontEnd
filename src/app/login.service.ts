import { User } from './login/login.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
 
  checkLogin(user: User) : Observable<any> {
    let url = "http://localhost:8181/login";
    return this.http.post(url,user);
    }

}
