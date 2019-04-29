import { TestBed, inject } from '@angular/core/testing';

import { ChandraService } from './chandra.service';

describe('ChandraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChandraService]
    });
  });

  it('should be created', inject([ChandraService], (service: ChandraService) => {
    expect(service).toBeTruthy();
  }));
});
