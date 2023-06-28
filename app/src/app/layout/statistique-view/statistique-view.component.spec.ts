import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueViewComponent } from './statistique-view.component';

describe('StatistiqueViewComponent', () => {
  let component: StatistiqueViewComponent;
  let fixture: ComponentFixture<StatistiqueViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueViewComponent]
    });
    fixture = TestBed.createComponent(StatistiqueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
