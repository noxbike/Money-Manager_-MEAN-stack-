import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstimateInvoiceComponent } from './create-estimate-invoice.component';

describe('CreateEstimateInvoiceComponent', () => {
  let component: CreateEstimateInvoiceComponent;
  let fixture: ComponentFixture<CreateEstimateInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEstimateInvoiceComponent]
    });
    fixture = TestBed.createComponent(CreateEstimateInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
