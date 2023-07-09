import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipientComponent } from './new-recipient.component';

describe('NewRecipientComponent', () => {
  let component: NewRecipientComponent;
  let fixture: ComponentFixture<NewRecipientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRecipientComponent]
    });
    fixture = TestBed.createComponent(NewRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
