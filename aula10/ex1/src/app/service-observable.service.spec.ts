import { TestBed } from '@angular/core/testing';

import { ServiceObservableService } from './service-observable.service';

describe('ServiceObservableService', () => {
  let service: ServiceObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
