import { TestBed } from '@angular/core/testing';

import { BaralhoProviderService } from './baralho-provider.service';

describe('BaralhoProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaralhoProviderService = TestBed.get(BaralhoProviderService);
    expect(service).toBeTruthy();
  });
});
