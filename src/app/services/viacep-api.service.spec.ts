import { TestBed } from '@angular/core/testing';

import { ViacepApiService } from './viacep-api.service';

describe('ViacepApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViacepApiService = TestBed.get(ViacepApiService);
    expect(service).toBeTruthy();
  });
});
