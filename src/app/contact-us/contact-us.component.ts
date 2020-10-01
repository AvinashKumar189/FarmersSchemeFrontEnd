import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  user: User= new User();

  ngOnInit(): void {
  }
  check(){
    alert(JSON.stringify(this.user));
    //console.log(this.user);
  }

}
export class User{
  name: string;
  emailId: string;
  subject: string;
  message: string;
}
