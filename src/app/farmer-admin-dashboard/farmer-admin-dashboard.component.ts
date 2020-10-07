import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-admin-dashboard',
  templateUrl: './farmer-admin-dashboard.component.html',
  styleUrls: ['./farmer-admin-dashboard.component.css']
})
export class FarmerAdminDashboardComponent implements OnInit {
  
  admin:string;
  farmerList:Farmer[];
  id:number;
  toggle: boolean=false;
  biddingDeadlineStatus:string="Set deadline";
  biddingEndDate:Date;
  sellingDeadline:Date;
  biddingStartDate:Date;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.viewAllRequests().subscribe(data=>{
      alert(JSON.stringify(data));
      this.farmerList=data.farmerRegistrationRequest;
    });
  }
  
  approveFarmer(id: number){
    this.id=id;
    this.adminService.approveFarmer(this.id).subscribe(data=>{
      alert(JSON.stringify(data));
    });
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

