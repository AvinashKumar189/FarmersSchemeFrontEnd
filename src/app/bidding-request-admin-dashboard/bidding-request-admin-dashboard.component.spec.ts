import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingRequestAdminDashboardComponent } from './bidding-request-admin-dashboard.component';

describe('BiddingRequestAdminDashbaordComponent', () => {
  let component: BiddingRequestAdminDashboardComponent;
  let fixture: ComponentFixture<BiddingRequestAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingRequestAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingRequestAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
