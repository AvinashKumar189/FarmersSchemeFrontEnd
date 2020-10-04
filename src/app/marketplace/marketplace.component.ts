import { Router } from '@angular/router';
import { FarmerService } from './../farmer.service';
import { Component, OnInit } from '@angular/core';
import { Marketplace } from './marketplace';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
})
export class MarketplaceComponent implements OnInit {
  marketplace: Marketplace[];
  toggle: boolean = false;
  userId:number;
  cropList: CropDetails[];
  bidList: BidDetails[];
  constructor(private farmerService: FarmerService, private router: Router) {}

  ngOnInit(): void {
    this.userId=25;
    //this.userId=Number(sessionStorage.getItem('UserId'));
    this.farmerService.viewActiveCrops(this.userId).subscribe( data =>{
      alert(JSON.stringify(data));
      this.cropList=data.cropForSale;
  }
  )
   
  }

  viewPreviousBidsForCrop(id: number) {

    this.toggle = !this.toggle;
    this.farmerService.viewPreviousBids(id).subscribe( data =>{
      alert(JSON.stringify(data));
      this.bidList=data.bidForCrop;
    }
    )
  }

  // this.marketplace=[ new Marketplace(101, 'Rice', 'Mohit', 50 ), new Marketplace(102, 'Tomato', 'Ram', 30 ), new Marketplace(103, 'Rice', 'Suresh', 50,)];
}

export class CropDetails{
  cropId:number;
  cropName:string;
  cropType:string;
  basePrice:number;
  currentBid: number;
}

export class BidDetails{
  sellRequestId:number;
  cropName:string;
  bidId:number;
  amount:number;
  bidDate: Date;

}

