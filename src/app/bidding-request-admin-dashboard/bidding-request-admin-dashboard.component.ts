import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-bidding-request-admin-dashboard',
  templateUrl: './bidding-request-admin-dashboard.component.html',
  styleUrls: ['./bidding-request-admin-dashboard.component.css']
})
export class BiddingRequestAdminDashboardComponent implements OnInit {
  adminId:string;
  bidList:BiddingRequest[];
  id:number;
  toggle: boolean=false;
  biddingDeadlineStatus:string="Set deadline";
  biddingEndDate:Date;
  sellingDeadline:Date;
  biddingStartDate:Date;
  crop: Crop=new Crop();

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminId = String(sessionStorage.getItem("userId")); 
    this.adminService.viewAllRequests(this.adminId).subscribe( data=>{
     // alert(JSON.stringify(data));
      console.log(data);
      this.bidList=data.biddingRequest;
    });
  }

  approveBiddingRequest(id: number){
    this.id=id;
    this.adminService.approveSellRequest(this.id).subscribe( data=>{
     // alert(JSON.stringify(data));
      console.log(data);
    });
  }

}


export class BiddingRequest{
  id:number;
  bidder:Bidder;
  sellrequest:SellRequest;
  amount:number;
  bidDate:Date;
  approvedStatus:string;
  finalStatus:string;
}

export class Crop{
  requestId:number;
  biddingDeadline:Date;
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

export class SellRequest{
  requestId:number;
  farmer:Farmer;
  requestDate:number;
  cropType:string;
  cropName:string;
  quantity:string;
  basePrice:number;
  fertilizerType:string;
  soilPhSertificate:string;
  sellingDeadline:Date;
  approvedStatus:string;
  biddingDeadline:Date;
  biddingStatus:string;
}

export class Farmer {
  id: number;
  fullName : string;
  contactNo : string;
  emailId : string;
  address : string;
  city : string;
  state : string;
  pinCode : number;
  landArea : string;
  landAddress : string;
  landPincode : number;
  accountNo : number;
  ifsc : string;
  aadhar : string;
  pan : string;
  certificate : string;
  password: string;
  approvedStatus: string;
}


