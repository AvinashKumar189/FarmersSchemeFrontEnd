import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  user: User= new User();

  checkLogin(){
    // alert(JSON.stringify(this.user));
     console.log(this.user);
   }

  ngOnInit(): void {
  }


}
export class User{
  userName: string;
  password: string;
}