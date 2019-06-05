import { TestBed } from '@angular/core/testing';

import { ChangeUserDetailsService } from './change-user-details.service';

describe('ChangeUserDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeUserDetailsService = TestBed.get(ChangeUserDetailsService);
    expect(service).toBeTruthy();
  });
});
