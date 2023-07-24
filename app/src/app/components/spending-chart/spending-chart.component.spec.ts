import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingChartComponent } from './spending-chart.component';

describe('SpendingChartComponent', () => {
  let component: SpendingChartComponent;
  let fixture: ComponentFixture<SpendingChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpendingChartComponent]
    });
    fixture = TestBed.createComponent(SpendingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
