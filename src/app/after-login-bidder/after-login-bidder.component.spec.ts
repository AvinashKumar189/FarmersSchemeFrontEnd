import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginBidderComponent } from './after-login-bidder.component';

describe('AfterLoginBidderComponent', () => {
  let component: AfterLoginBidderComponent;
  let fixture: ComponentFixture<AfterLoginBidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginBidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
