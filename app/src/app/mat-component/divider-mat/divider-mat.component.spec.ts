import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerMatComponent } from './divider-mat.component';

describe('DividerMatComponent', () => {
  let component: DividerMatComponent;
  let fixture: ComponentFixture<DividerMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividerMatComponent]
    });
    fixture = TestBed.createComponent(DividerMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
