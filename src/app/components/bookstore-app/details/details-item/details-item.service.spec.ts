/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailsItemService } from './details-item.service';

describe('Service: DetailsItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsItemService]
    });
  });

  it('should ...', inject([DetailsItemService], (service: DetailsItemService) => {
    expect(service).toBeTruthy();
  }));
});
