import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-login-farmer',
  templateUrl: './after-login-farmer.component.html',
  styleUrls: ['./after-login-farmer.component.css']
})
export class AfterLoginFarmerComponent implements OnInit {
  
  userId : number;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem("userId")); 
  }
  goPlaceSellRequest(){
    this.router.navigate(['/place-sell-request']);
  }

  goSoldCropHistory(){
    this.router.navigate(['/sold-crop-history']);
  }

  goMarketPlace(){
    this.router.navigate(['/marketplace']);
  }
}
