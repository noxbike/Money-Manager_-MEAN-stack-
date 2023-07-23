import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySpendingComponent } from './category-spending.component';

describe('CategorySpendingComponent', () => {
  let component: CategorySpendingComponent;
  let fixture: ComponentFixture<CategorySpendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorySpendingComponent]
    });
    fixture = TestBed.createComponent(CategorySpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
