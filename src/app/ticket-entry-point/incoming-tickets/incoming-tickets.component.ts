import { Component, OnInit } from '@angular/core';
import { TicketData } from '../interfaces/ticket-data.interface';
import mockTicketData from '../mock-data/mock-tickets.json'



@Component({
  selector: 'app-incoming-tickets',
  templateUrl: './incoming-tickets.component.html',
  styleUrls: ['./incoming-tickets.component.css']
})
export class IncomingTicketsComponent implements OnInit {

  incomingTickets: TicketData[] = mockTicketData 
  constructor() { }

  ngOnInit(): void {
  }

}
