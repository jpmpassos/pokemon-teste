import { TestBed } from '@angular/core/testing';

import { PokemonTcgService } from './pokemon-tcg.service';

describe('PokemonTcgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonTcgService = TestBed.get(PokemonTcgService);
    expect(service).toBeTruthy();
  });
});
