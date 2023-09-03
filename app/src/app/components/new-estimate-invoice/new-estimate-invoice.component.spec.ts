import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEstimateInvoiceComponent } from './new-estimate-invoice.component';

describe('NewEstimateComponent', () => {
  let component: NewEstimateInvoiceComponent;
  let fixture: ComponentFixture<NewEstimateInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEstimateInvoiceComponent]
    });
    fixture = TestBed.createComponent(NewEstimateInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
