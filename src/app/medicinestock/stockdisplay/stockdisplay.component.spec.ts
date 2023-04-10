import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockdisplayComponent } from './stockdisplay.component';

describe('StockdisplayComponent', () => {
  let component: StockdisplayComponent;
  let fixture: ComponentFixture<StockdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
