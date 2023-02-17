import { TestBed } from '@angular/core/testing';

import { DemandService } from './demand.service';

describe('DemandService', () => {
  let service: DemandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
