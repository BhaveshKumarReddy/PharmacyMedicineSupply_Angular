import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySupplyComponent } from './pharmacy-supply.component';

describe('PharmacySupplyComponent', () => {
  let component: PharmacySupplyComponent;
  let fixture: ComponentFixture<PharmacySupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacySupplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacySupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
