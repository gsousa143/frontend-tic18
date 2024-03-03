import { TestBed } from '@angular/core/testing';

import { RastreiaService } from './rastreia.service';

describe('RastreiaService', () => {
  let service: RastreiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RastreiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
