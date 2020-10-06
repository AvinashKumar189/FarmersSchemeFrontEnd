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
  id:number;
  toggle: boolean=false;
  biddingDeadlineStatus:string="Set deadline";
  biddingEndDate:Date;
  sellingDeadline:Date;
  biddingStartDate:Date;
  crop: Crop=new Crop();

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

  approveFarmer(id: number){
    this.id=id;
    this.adminService.approveFarmer(this.id).subscribe( data=>{
      alert(JSON.stringify(data));
    }

    )
  }

  approveBidder(id: number){
    this.id=id;
    this.adminService.approveBidder(this.id).subscribe( data=>{
      alert(JSON.stringify(data));
    }

    )
  }

  approveSellRequest(id: number){
    this.id=id;
    this.adminService.approveSellRequest(this.id).subscribe( data=>{
      alert(JSON.stringify(data));
    }

    )
  }

  approveBiddingRequest(id: number){
    this.id=id;
    this.adminService.approveSellRequest(this.id).subscribe( data=>{
      alert(JSON.stringify(data));
    }

    )
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
    }
    );
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

export class Crop{
  requestId:number;
  biddingDeadline:Date;
}


