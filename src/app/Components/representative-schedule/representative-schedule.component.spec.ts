import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeScheduleComponent } from './representative-schedule.component';

describe('RepresentativeScheduleComponent', () => {
  let component: RepresentativeScheduleComponent;
  let fixture: ComponentFixture<RepresentativeScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentativeScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentativeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
