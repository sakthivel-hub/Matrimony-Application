import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountAreaComponent } from './discount-area.component';

describe('DiscountAreaComponent', () => {
  let component: DiscountAreaComponent;
  let fixture: ComponentFixture<DiscountAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
