import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ValidatorFn} from '@angular/forms';
import { BidderService } from '../bidder.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {

  data: any;
  bidder: Bidder = new  Bidder();
  fileContent: any;

  constructor(private router: Router, private bidderService: BidderService) { }

  ngOnInit(): void {
  }

  goRegisterSuccess(){
    alert(JSON.stringify(this.bidder));
    //console.log(this.bidder);
    this.bidderService.goRegisterSuccess(this.bidder).subscribe(response => {
      this.data= response;
    })
    //this.router.navigate(['/register-success']);
  }

}
export class Bidder{
  fullName: string;
  contactNo: string;
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
  confirmPassword: string;
}

