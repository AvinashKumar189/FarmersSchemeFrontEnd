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

  constructor() {}

  ngOnInit(): void {}
  viewMore() {
    this.toggle = !this.toggle;
  }
  // this.marketplace=[ new Marketplace(101, 'Rice', 'Mohit', 50 ), new Marketplace(102, 'Tomato', 'Ram', 30 ), new Marketplace(103, 'Rice', 'Suresh', 50,)];
}
