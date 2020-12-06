import { TestBed } from '@angular/core/testing';

import { SifyService } from './sify.service';

describe('SifyService', () => {
  let service: SifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
