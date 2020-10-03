import { ForgotPasswordService } from './../forgot-password.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private forgotPasswordService : ForgotPasswordService) { }
  user : User= new User();
  data : any;

  ngOnInit(): void {
  }

  checkMail(){
    alert(JSON.stringify(this.user));
  //console.log(this.user);
    this.forgotPasswordService.checkMail(this.user.email).subscribe(response => {
      this.data=response;
      alert(JSON.stringify(this.data));
    });
  }

}
export class User{
  email: string;
}