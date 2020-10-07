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
  userId: number;
  cropList: CropDetails[];
  bidList: BidDetails[];
  constructor(private farmerService: FarmerService, private router: Router) { }

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem("userId"));
    this.farmerService.viewActiveCrops(this.userId).subscribe(data => {
      //alert(JSON.stringify(data));
      console.log(data);
      this.cropList = data.cropForSale;
    });
  }

  viewPreviousBidsForCrop(id: number) {

    this.toggle = !this.toggle;
    this.farmerService.viewPreviousBids(id).subscribe(data => {
      //alert(JSON.stringify(data));
      console.log(data);
      this.bidList = data.bidForCrop;
    }
    )
  }

}

export class CropDetails {
  cropId: number;
  cropName: string;
  cropType: string;
  basePrice: number;
  currentBid: number;
}

export class BidDetails {
  sellRequestId: number;
  cropName: string;
  bidId: number;
  amount: number;
  bidDate: Date;

}

