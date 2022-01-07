import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketEntryPointComponent } from './ticket-entry-point.component';
import { IncomingTicketsComponent } from './incoming-tickets/incoming-tickets.component';



@NgModule({
  declarations: [
    TicketEntryPointComponent,
    IncomingTicketsComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TicketEntryPointComponent,
  ]
})
export class TicketEntryPointModule { }


