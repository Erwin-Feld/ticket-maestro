import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketEntryPointComponent } from './ticket-entry-point.component';



@NgModule({
  declarations: [
    TicketEntryPointComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TicketEntryPointComponent,
  ]
})
export class TicketEntryPointModule { }


