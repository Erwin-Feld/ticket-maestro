import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingTicketsComponent } from './incoming-tickets.component';

describe('IncomingTicketsComponent', () => {
  let component: IncomingTicketsComponent;
  let fixture: ComponentFixture<IncomingTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
