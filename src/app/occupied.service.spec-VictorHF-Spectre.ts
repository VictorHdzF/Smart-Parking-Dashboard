import { TestBed } from '@angular/core/testing';

import { OccupiedService } from './occupied.service';

describe('OccupiedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccupiedService = TestBed.get(OccupiedService);
    expect(service).toBeTruthy();
  });
});
