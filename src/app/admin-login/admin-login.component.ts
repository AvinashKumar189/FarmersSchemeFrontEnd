import { AdminService } from './../admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router : Router, private adminService: AdminService) { }
  user : User = new User();
  data : any;
  loginFailed : boolean = false;

  checkAdminLogin(){
    alert(JSON.stringify(this.user));
    this.adminService.adminLogin(this.user).subscribe(response => {
      this.data = response;
      alert(JSON.stringify(this.data));
      if(this.data.status) {
        sessionStorage.setItem("userId",response.id);
        this.router.navigate(['/admin-dashboard']);
      }

      else {
        this.loginFailed = true;
      }
    }); 
  }

  ngOnInit(): void {
  }

}
export class User {
  email : String;
  password : String;
}
