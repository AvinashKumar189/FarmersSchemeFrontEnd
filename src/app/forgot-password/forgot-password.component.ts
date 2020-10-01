import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }
  user: User= new User();

  ngOnInit(): void {
  }

  checkMail(){
    alert(JSON.stringify(this.user));
  }

}
export class User{
  emailId: string;
}