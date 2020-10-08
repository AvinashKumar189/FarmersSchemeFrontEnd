import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { BidderService } from './../bidder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-login-bidder',
  templateUrl: './after-login-bidder.component.html',
  styleUrls: ['./after-login-bidder.component.css'],
})
export class AfterLoginBidderComponent implements OnInit {
  toggle: boolean = false;
  cropList: CropDetails[];
  id: number;
  name: string;
  currentBid: number;
  liveBid: number;
  basePrice: number;
  bidInProcess: BidInProcess = new BidInProcess();
  currDate: Date;
  today: string;
  count: number=0;
  expiringCrop: number;

  constructor(private bidderService: BidderService, private router: Router) { }

  ngOnInit(): void {
    this.bidInProcess.bidderId = Number(sessionStorage.getItem("userId"));
    this.bidderService.fetchAllCrops().subscribe(data => {
      //alert(JSON.stringify(data));
      console.log(data);
      this.currDate=new Date();
      let date = ("0" + this.currDate.getDate()).slice(-2);
      let month = ("0" + (this.currDate.getMonth() + 1)).slice(-2);
      let year = this.currDate.getFullYear();
      this.today = year + "-" + month + "-" + date;
      this.cropList = data.cropForSale;
    });
  }

  expiringBid(id: number){
    this.expiringCrop=id;
    this.count++;
  }

  displayCropForBidding(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.basePrice = price;
    this.toggle = !this.toggle;
    this.bidderService.fetchCropDetails(this.id).subscribe(data => {
      //alert(JSON.stringify(data));
      console.log(data);
      this.currentBid = data.amount;
    }

    )
  }

  placeBidForCrop() {
      if (this.currentBid==null? this.liveBid>this.basePrice:this.liveBid>(this.currentBid+100)) {
      this.bidInProcess.sellRequestId = this.id;
      this.bidInProcess.amount = this.liveBid;
      //this.bidInProcess.bidderId=Number(sessionStorage.getItem("userId")); 
      this.bidderService.submitBidForCrop(this.bidInProcess).subscribe(data => {
        //alert(JSON.stringify(data));
        console.log(data);
        if (data.status)
          alert(data.statusMessage);
        else
          alert(data.statusMessage);
      });
      }
      else
        alert("Invalid bid amount!");
  }
}

export class CropDetails {
  cropId: number;
  cropName: string;
  cropType: string;
  basePrice: number;
  currentBid: number;
  biddingDeadline: Date; 
}

export class BidInProcess {

  sellRequestId: number;
  bidderId: number;
  amount: number;

}

