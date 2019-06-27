import { TestBed } from '@angular/core/testing';

import { PersonasServices } from './personas.services';

describe('PersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonasServices = TestBed.get(PersonasServices);
    expect(service).toBeTruthy();
  });
});
