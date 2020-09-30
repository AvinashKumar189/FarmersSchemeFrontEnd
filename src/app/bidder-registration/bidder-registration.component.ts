import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {

  fileContent: any;

  constructor(private router: Router) { }

  bidder: Bidder = new  Bidder();

  ngOnInit(): void {
  }

  goRegisterSuccess(){
    alert(JSON.stringify(this.bidder));
    //this.router.navigate(['/register-success']);
  }

}
export class Bidder{
  fullName: string;
  contactNo: number;
  emailId: string;
  address: string;
  city: string;
  state: string;
  pinCode : number;
  accountNo : number;
  ifsc: string;
  aadhar: string;
  pan: string;
  traderLicense: string;
  password: string;

}
