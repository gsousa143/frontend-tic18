import { TestBed } from '@angular/core/testing';

import { HttpServicoService } from './http-servico.service';

describe('HttpServicoService', () => {
  let service: HttpServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
