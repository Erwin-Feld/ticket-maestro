import { Component, Input, OnInit } from '@angular/core';
import { TicketData } from '../interfaces/ticket-data.interface';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticketValues!: TicketData;

  constructor() { }

  ngOnInit(): void {
  }

}
