import { TestBed } from '@angular/core/testing';

import { TicketDistributorService } from './ticket-distributor.service';

describe('TicketDistributorService', () => {
  let service: TicketDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
