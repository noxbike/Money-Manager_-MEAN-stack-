import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthChartComponent } from './health-chart.component';

describe('HealthChartComponent', () => {
  let component: HealthChartComponent;
  let fixture: ComponentFixture<HealthChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthChartComponent]
    });
    fixture = TestBed.createComponent(HealthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
