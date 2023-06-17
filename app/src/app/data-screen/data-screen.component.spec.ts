import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScreenComponent } from './data-screen.component';

describe('DataScreenComponent', () => {
  let component: DataScreenComponent;
  let fixture: ComponentFixture<DataScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataScreenComponent]
    });
    fixture = TestBed.createComponent(DataScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
