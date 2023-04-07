import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinedemandComponent } from './medicinedemand.component';

describe('MedicinedemandComponent', () => {
  let component: MedicinedemandComponent;
  let fixture: ComponentFixture<MedicinedemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinedemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinedemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
