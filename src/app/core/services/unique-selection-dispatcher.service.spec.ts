import { TestBed } from '@angular/core/testing';

import { UniqueSelectionDispatcherService } from './unique-selection-dispatcher.service';

describe('UniqueSelectionDispatcherService', () => {
  let service: UniqueSelectionDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueSelectionDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
