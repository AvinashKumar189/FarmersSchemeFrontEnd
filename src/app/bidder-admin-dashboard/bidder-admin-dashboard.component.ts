import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-bidder-admin-dashboard',
  templateUrl: './bidder-admin-dashboard.component.html',
  styleUrls: ['./bidder-admin-dashboard.component.css']
})
export class BidderAdminDashboardComponent implements OnInit {
  admin:string;
  bidderList:Bidder[];
  id:number;
  toggle: boolean=false;
  biddingDeadlineStatus:string="Set deadline";
  biddingEndDate:Date;
  sellingDeadline:Date;
  biddingStartDate:Date;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.viewAllRequests().subscribe( data=>{
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


