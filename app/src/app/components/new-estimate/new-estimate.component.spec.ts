import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEstimateComponent } from './new-estimate.component';

describe('NewEstimateComponent', () => {
  let component: NewEstimateComponent;
  let fixture: ComponentFixture<NewEstimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEstimateComponent]
    });
    fixture = TestBed.createComponent(NewEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
