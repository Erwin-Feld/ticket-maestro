import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEntryPointComponent } from './ticket-entry-point.component';

describe('TicketEntryPointComponent', () => {
  let component: TicketEntryPointComponent;
  let fixture: ComponentFixture<TicketEntryPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketEntryPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEntryPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
