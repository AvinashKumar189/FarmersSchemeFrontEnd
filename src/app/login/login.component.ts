import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }
  user : User= new User();
  data : any;
  loginFailed : boolean;

  checkLogin(){
     alert(JSON.stringify(this.user));
    // console.log(this.user);
    this.loginService.checkLogin(this.user).subscribe(response => {
      this.data = response;
      alert(JSON.stringify(this.data));
      if (this.data.status && this.data.farmer)  { //this.data.status --> if status is true , i.e. email id and password are true only
      this.router.navigate(['/after-login-farmer']);
    }

    else if (this.data.status && !this.data.farmer) {
      this.router.navigate(['/after-login-bidder']);
    }

    else {
      this.loginFailed = true;
    }
    });
    
   }

  ngOnInit(): void {
  }


}
export class User{
  email: string;
  password: string;
}