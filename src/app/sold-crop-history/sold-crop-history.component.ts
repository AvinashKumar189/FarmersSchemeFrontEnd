import { Router } from '@angular/router';
import { FarmerService } from './../farmer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sold-crop-history',
  templateUrl: './sold-crop-history.component.html',
  styleUrls: ['./sold-crop-history.component.css']
})
export class SoldCropHistoryComponent implements OnInit {

  userId:number;
  soldCropList: SoldCropDetails[];

  constructor(private farmerService: FarmerService, private router: Router) { }

  ngOnInit(): void {
    this.userId=Number(sessionStorage.getItem("userId"));
    this.farmerService.viewSoldHistory(this.userId).subscribe( data=>{
      alert(JSON.stringify(data));
      this.soldCropList=data.soldCrop;
    }

    )
  }

}

export class SoldCropDetails{
  sellRequestId:number;
  cropName:string;
  quantity:number;
  basePrice:number;
  soldPrice:number;
  soldDate:Date;
}
