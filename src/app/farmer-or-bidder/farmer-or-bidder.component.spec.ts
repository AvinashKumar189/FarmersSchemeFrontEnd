import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerOrBidderComponent } from './farmer-or-bidder.component';

describe('FarmerOrBidderComponent', () => {
  let component: FarmerOrBidderComponent;
  let fixture: ComponentFixture<FarmerOrBidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerOrBidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerOrBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
