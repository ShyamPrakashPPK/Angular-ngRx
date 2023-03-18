import { TestBed } from '@angular/core/testing';

import { UserLoginSignupService } from './user-login-signup.service';

describe('UserLoginSignupService', () => {
  let service: UserLoginSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoginSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
