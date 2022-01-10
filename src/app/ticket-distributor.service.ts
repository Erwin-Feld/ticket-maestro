import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockTicketData from '../app/ticket-entry-point/mock-data/mock-tickets.json'
import { TicketData } from './ticket-entry-point/interfaces/ticket-data.interface';


@Injectable({
  providedIn: 'root'
})
export class TicketDistributorService {

  constructor() { }

  getTicketData(): Observable<TicketData[]>  {
                   /* of value this as Observable */
    const ticketData = of(mockTicketData);
    return ticketData;
  }
}




