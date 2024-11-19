import { TestBed } from '@angular/core/testing';

import { RecetasServiciosService } from './recetas-servicios.service';

describe('RecetasServiciosService', () => {
  let service: RecetasServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
