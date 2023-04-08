import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinestockdisplayComponent } from './medicinestockdisplay.component';

describe('MedicinestockdisplayComponent', () => {
  let component: MedicinestockdisplayComponent;
  let fixture: ComponentFixture<MedicinestockdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinestockdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinestockdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
