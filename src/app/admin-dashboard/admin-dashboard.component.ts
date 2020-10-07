import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  id:number;
  
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  goFarmerAdminDashBoard(){
    this.router.navigate(['/farmer-admin-dashboard']);
  }

  goBidderAdminDashBoard(){
    this.router.navigate(['/bidder-admin-dashboard']);
  }

  goSellRequestAdminDashBoard(){
    this.router.navigate(['/sell-request-admin-dashboard']);
  }

  goBiddingRequestAdminDashBoard() {
    this.router.navigate(['/bidding-request-admin-dashboard']);
  }

}


