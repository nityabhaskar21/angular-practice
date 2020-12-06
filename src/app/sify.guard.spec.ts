import { TestBed } from '@angular/core/testing';

import { SifyGuard } from './sify.guard';

describe('SifyGuard', () => {
  let guard: SifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
