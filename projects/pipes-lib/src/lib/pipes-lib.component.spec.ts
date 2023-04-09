import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesLibComponent } from './pipes-lib.component';

describe('PipesLibComponent', () => {
  let component: PipesLibComponent;
  let fixture: ComponentFixture<PipesLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
