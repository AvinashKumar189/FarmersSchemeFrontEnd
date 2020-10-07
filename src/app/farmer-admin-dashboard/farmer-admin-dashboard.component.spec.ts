import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAdminDashboardComponent } from './farmer-admin-dashboard.component';

describe('FarmerAdminDashboardComponent', () => {
  let component: FarmerAdminDashboardComponent;
  let fixture: ComponentFixture<FarmerAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
