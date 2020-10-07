import { SellRequestService } from './../sell-request.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-sell-request',
  templateUrl: './place-sell-request.component.html',
  styleUrls: ['./place-sell-request.component.css'],
})
export class PlaceSellRequestComponent implements OnInit {
  sellRequest: SellRequest = new SellRequest();
  data: any;


  constructor(
    private router: Router,
    private sellRequestService: SellRequestService
  ) { }

  ngOnInit(): void {
  }

  goSellRequest() {
    //alert(JSON.stringify(this.sellRequest));
    this.sellRequest.farmerId = Number(sessionStorage.getItem("userId"));
    console.log(this.sellRequest);
    this.sellRequestService
      .goSellRequest(this.sellRequest)
      .subscribe(response => {
        this.data = response;
      });
    this.router.navigate(['/sell-request-success']);
  }
}

export class SellRequest {
  farmerId: number;
  cropType: string;
  cropName: string;
  fertilizerType: string;
  quantity: number;
  sellingDeadline: Date;
  basePrice: number;
  approvedStatus: string;
}
