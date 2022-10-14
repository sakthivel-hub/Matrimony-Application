import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradenowComponent } from './upgradenow.component';

describe('UpgradenowComponent', () => {
  let component: UpgradenowComponent;
  let fixture: ComponentFixture<UpgradenowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradenowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
