/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateFormatterService } from './date-formatter.service';

describe('Service: DateFormatter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateFormatterService]
    });
  });

  it('should ...', inject([DateFormatterService], (service: DateFormatterService) => {
    expect(service).toBeTruthy();
  }));
});
