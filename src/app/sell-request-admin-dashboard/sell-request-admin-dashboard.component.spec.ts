import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRequestAdminDashboardComponent } from './sell-request-admin-dashboard.component';

describe('SellRequestAdminDashboardComponent', () => {
  let component: SellRequestAdminDashboardComponent;
  let fixture: ComponentFixture<SellRequestAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellRequestAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellRequestAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
