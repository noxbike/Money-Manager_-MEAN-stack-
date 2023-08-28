import { TestBed } from '@angular/core/testing';

import { AccountStatusDataService } from './account-status-data.service';

describe('AccountStatusDataService', () => {
  let service: AccountStatusDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountStatusDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
