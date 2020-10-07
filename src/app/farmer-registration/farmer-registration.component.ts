import { FarmerService } from './../farmer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
  
  farmer : Farmer = new Farmer(); 
  fileContent: any;
  data : any;

  constructor(private router: Router,private farmerService: FarmerService) { } 

  ngOnInit(): void {
  }

  goRegisterSuccess(){
    //alert(JSON.stringify(this.farmer));
    console.log(this.farmer);
    this.farmerService.goRegisterSuccess(this.farmer).subscribe(response => {
      this.data = response;
    });
    this.router.navigate(['/register-success']);
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
  aadhar : string;
  pan : string;
  certificate : string;
  password : string;
  confirmPassword : string;
}
