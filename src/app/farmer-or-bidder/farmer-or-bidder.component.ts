import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-or-bidder',
  templateUrl: './farmer-or-bidder.component.html',
  styleUrls: ['./farmer-or-bidder.component.css']
})
export class FarmerOrBidderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goFarmerRegistration(){
    this.router.navigate(['/farmer-registration']);
  }

  goBidderRegistration(){
    this.router.navigate(['/bidder-registration']);
  }

}
