import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketEntryPointModule } from './ticket-entry-point/ticket-entry-point.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TicketEntryPointModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
