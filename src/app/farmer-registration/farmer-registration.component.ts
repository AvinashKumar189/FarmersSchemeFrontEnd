import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
  
  fileContent: any;

  constructor(private router: Router) { }
  
  farmer : Farmer = new Farmer();

  ngOnInit(): void {
  }

  goRegisterSuccess(){
    alert(JSON.stringify(this.farmer));
    //console.log(this.farmer);
    //this.router.navigate(['/register-success']);
  }

}

export class Farmer {
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
  aadhaar : number;
  pan : string;
  certificate : string;
  password : string;
  confirmPassword : string;
}
