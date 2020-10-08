import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-bidder-admin-dashboard',
  templateUrl: './bidder-admin-dashboard.component.html',
  styleUrls: ['./bidder-admin-dashboard.component.css']
})
export class BidderAdminDashboardComponent implements OnInit {
  adminId:string;
  bidderList:Bidder[];
  id:number;
  toggle: boolean=false;
  biddingDeadlineStatus:string="Set deadline";
  biddingEndDate:Date;
  sellingDeadline:Date;
  biddingStartDate:Date;
  toggleBidder:boolean = false;
  bidder: Bidder=new Bidder();

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminId = String(sessionStorage.getItem("userId")); 
    this.adminService.viewAllRequests(this.adminId).subscribe( data=>{
      alert(JSON.stringify(data));
      this.bidderList=data.bidderRegistrationRequest;
    });
  }

  approveBidder(id: number){
    this.id=id;
    this.adminService.approveBidder(this.id).subscribe( data=>{
      alert(JSON.stringify(data));
    });
  }

  viewBidderDetails(id: number){
    this.id=id;
    this.toggleBidder=!this.toggleBidder;
    this.adminService.getBidderDetails(this.id).subscribe(data=>{
      alert(JSON.stringify(data));
      this.bidder=data;
    });
  }

}

export class Bidder{
  id:number;
  fullName : string;
  contactNo : string;
  emailId : string;
  address : string;
  city : string;
  state : string;
  pinCode : number;
  accountNo : number;
  ifsc : string;
  aadhar : string;
  pan : string;
  traderLicense : string;
  password: string;
  approvedStatus: string;
}


