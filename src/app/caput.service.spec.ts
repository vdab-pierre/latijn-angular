import { TestBed, inject } from '@angular/core/testing';

import { CaputService } from './caput.service';

describe('CaputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaputService]
    });
  });

  it('should be created', inject([CaputService], (service: CaputService) => {
    expect(service).toBeTruthy();
  }));
});
