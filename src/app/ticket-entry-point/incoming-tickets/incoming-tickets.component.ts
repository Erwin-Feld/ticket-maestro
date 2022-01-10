import { Component, OnInit } from '@angular/core';
import { TicketDistributorService } from 'src/app/ticket-distributor.service';
import { TicketData } from '../interfaces/ticket-data.interface';
// import mockTicketData from '../mock-data/mock-tickets.json'



@Component({
  selector: 'app-incoming-tickets',
  templateUrl: './incoming-tickets.component.html',
  styleUrls: ['./incoming-tickets.component.css']
})
export class IncomingTicketsComponent implements OnInit {

  // incomingTickets: TicketData[] = mockTicketData; 
  
  receaveTickets: TicketData[] = [];
  
  constructor(private ticketDistributorService: TicketDistributorService) { }

  ngOnInit(): void {
    this.getTicketData();
  }

  getTicketData():void {
    this.ticketDistributorService.getTicketData().
                          subscribe(receaveTickets => this.receaveTickets = receaveTickets)
  }

}
