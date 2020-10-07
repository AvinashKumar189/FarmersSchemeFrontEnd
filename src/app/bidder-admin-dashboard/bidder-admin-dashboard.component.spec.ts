import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderAdminDashbaordComponent } from './bidder-admin-dashboard.component';

describe('BidderAdminDashbaordComponent', () => {
  let component: BidderAdminDashbaordComponent;
  let fixture: ComponentFixture<BidderAdminDashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderAdminDashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderAdminDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
