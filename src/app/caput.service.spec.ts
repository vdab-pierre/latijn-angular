import { TestBed, inject } from '@angular/core/testing';

import { LatijnService } from './latijn.service';

describe('LatijnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatijnService]
    });
  });

  it('should be created', inject([LatijnService], (service: LatijnService) => {
    expect(service).toBeTruthy();
  }));
});
