import { TestBed } from '@angular/core/testing';

import { ScreenServiceService } from './screen-service.service';

describe('ScreenServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenServiceService = TestBed.get(ScreenServiceService);
    expect(service).toBeTruthy();
  });
});
