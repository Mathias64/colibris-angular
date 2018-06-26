import { TestBed, inject } from '@angular/core/testing';

import { AuthIntercepteur } from './auth-intercepteur';

describe('IntercpteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthIntercepteur]
    });
  });

  it('should be created', inject([AuthIntercepteur], (service: AuthIntercepteur) => {
    expect(service).toBeTruthy();
  }));
});
