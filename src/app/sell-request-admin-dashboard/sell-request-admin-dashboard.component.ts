import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-sell-request-admin-dashboard',
  templateUrl: './sell-request-admin-dashboard.component.html',
  styleUrls: ['./sell-request-admin-dashboard.component.css']
})
export class SellRequestAdminDashboardComponent implements OnInit {
  adminId:string;
  cropList:SellRequest[];
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
      alert(JSON.stringify(data));
      this.cropList=data.cropSellRequest;
    });
  }

  approveSellRequest(id: number){
    this.id=id;
    this.adminService.approveSellRequest(this.id).subscribe( data=>{
      alert(JSON.stringify(data));
    });
  }

  openBiddingDeadlineForm(id: number, requestDate: Date, sellingDeadline: Date){
    this.toggle=!this.toggle;
    this.crop.requestId=id;
    this.biddingStartDate=requestDate;
    this.sellingDeadline=sellingDeadline;
  }

  setBiddingDeadline(){
    if(this.biddingEndDate>this.biddingStartDate && this.biddingEndDate<this.sellingDeadline){
    this.crop.biddingDeadline=this.biddingEndDate;   
    this.adminService.setBiddingDeadline(this.crop).subscribe( data=>{
      alert(JSON.stringify(data));
      if(data.status)
        alert(data.statusMessage);
      else 
        alert(data.statusMessage);
      });
        this.toggle=!this.toggle;
      }
    else{
        alert("Enter proper bidding deadline!");
    }
  }

  closeBidding(id: number){
    this.id=id;
    this.adminService.closeBiddingForCrop(this.id).subscribe( data=>{
      alert(JSON.stringify(data));
    });
  }

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

export class Crop{
  requestId:number;
  biddingDeadline:Date;
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
