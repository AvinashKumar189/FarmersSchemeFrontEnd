import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-login-navbar',
  templateUrl: './after-login-navbar.component.html',
  styleUrls: ['./after-login-navbar.component.css']
})
export class AfterLoginNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goHome(){
    this.router.navigate(['/home']);
  }
  goAboutUs(){
    this.router.navigate(['/about-us']);
  }
  goContactUs(){
    this.router.navigate(['/contact-us']);
  }
  goLogout(){
    this.router.navigate(['/logout']);
  }
}
