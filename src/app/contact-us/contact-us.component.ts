import { ContactusService } from './../contactus.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactUsService : ContactusService) { }
  user : User= new User();
  data : any;

  ngOnInit(): void {
  }
  check(){
    alert(JSON.stringify(this.user));
    //console.log(this.user);
    this.contactUsService.check(this.user).subscribe(response => {
       this.data=response;
       alert(JSON.stringify(this.data));
    });

  }

}
export class User{
  name: string;
  email: string;
  subject: string;
  message: string;
}
