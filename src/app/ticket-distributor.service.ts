import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockTicketData from '../app/ticket-entry-point/mock-data/mock-tickets.json'
import { TicketData } from './ticket-entry-point/interfaces/ticket-data.interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TicketDistributorService {

  constructor(private messageService: MessageService) { }

  getTicketData(): Observable<TicketData[]>  {
                   /* of value this as Observable */
    const ticketData = of(mockTicketData);
    console.log(ticketData)
    this.messageService.add('TicketService respond : all tickets fetched! ');
    return ticketData;
  }

/* create a method which stores tickets
  add ticket 

*/

}




