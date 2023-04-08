import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidescheduledateComponent } from './providescheduledate.component';

describe('ProvidescheduledateComponent', () => {
  let component: ProvidescheduledateComponent;
  let fixture: ComponentFixture<ProvidescheduledateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidescheduledateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidescheduledateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
