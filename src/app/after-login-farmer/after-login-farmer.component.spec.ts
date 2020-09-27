import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginFarmerComponent } from './after-login-farmer.component';

describe('AfterLoginFarmerComponent', () => {
  let component: AfterLoginFarmerComponent;
  let fixture: ComponentFixture<AfterLoginFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
