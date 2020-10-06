import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  admin:string;
  farmerList:Farmer[];
  bidderList:Bidder[];
  cropList:SellRequest[];
  bidList:BiddingRequest[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.viewAllRequests().subscribe( data=>{
      alert(JSON.stringify(data));
      this.farmerList=data.farmerRegistrationRequest;
      this.bidderList=data.bidderRegistrationRequest;
      this.cropList=data.cropSellRequest;
      this.bidList=data.biddingRequest;
    }

    )


  }

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

export class BiddingRequest{
  id:number;
  bidder:Bidder;
  sellrequest:SellRequest;
  amount:number;
  bidDate:Date;
  approvedStatus:string;
  finalStatus:string;
}

