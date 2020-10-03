import { User } from './contact-us/contact-us.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactusService {
  constructor(private http: HttpClient) {}

  check(user: User): Observable<any> {
    let url = 'http://localhost:8181/contact-us';
    return this.http.post(url, user);
  }
}
