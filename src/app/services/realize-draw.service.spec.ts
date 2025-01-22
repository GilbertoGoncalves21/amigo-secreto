import { TestBed } from '@angular/core/testing';

import { RealizeDrawService } from './realize-draw.service';

describe('RealizeDrawService', () => {
  let service: RealizeDrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealizeDrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
