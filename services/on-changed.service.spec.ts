import { TestBed, inject } from '@angular/core/testing';

import { OnChangedService } from './on-changed.service';

describe('OnChangedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnChangedService]
    });
  });

  it('should be created', inject([OnChangedService], (service: OnChangedService) => {
    expect(service).toBeTruthy();
  }));
});
