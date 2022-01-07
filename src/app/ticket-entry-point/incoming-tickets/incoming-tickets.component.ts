import { Component, OnInit } from '@angular/core';
import { TicketData } from '../interfaces/ticket-data.interface';

@Component({
  selector: 'app-incoming-tickets',
  templateUrl: './incoming-tickets.component.html',
  styleUrls: ['./incoming-tickets.component.css']
})
export class IncomingTicketsComponent implements OnInit {

  incomingTickets: TicketData =  {id: 1, text: "connection issues, pls help"}

  constructor() { }

  ngOnInit(): void {
  }

}
