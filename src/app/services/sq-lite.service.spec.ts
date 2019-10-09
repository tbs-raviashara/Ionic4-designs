import { TestBed } from '@angular/core/testing';

import { SqLiteService } from './sq-lite.service';

describe('SqLiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqLiteService = TestBed.get(SqLiteService);
    expect(service).toBeTruthy();
  });
});
