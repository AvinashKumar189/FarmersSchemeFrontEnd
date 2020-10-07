import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRequestSuccessComponent } from './sell-request-success.component';

describe('SellRequestSuccessComponent', () => {
  let component: SellRequestSuccessComponent;
  let fixture: ComponentFixture<SellRequestSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellRequestSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellRequestSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
