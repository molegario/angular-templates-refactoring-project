import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import type { Ticket } from "./ticket.model";
import { TicketService } from "./ticket.service";

@Component({
  selector: 'new-ticket-form',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
  imports: [FormsModule],
})
export class NewTicketComponent {
  ticketTitle = signal<string>('');
  ticketDescription = signal<string>('');

  constructor(
    private ticketService: TicketService,
  ) {}

  onTicketSubmit() {
    if (!this.ticketTitle() || !this.ticketDescription()) {
      return;
    }
    const newTicket: Ticket = {
      id: Math.random().toString(36).substr(2, 9),
      title: this.ticketTitle(),
      description: this.ticketDescription(),
      status: 'open',
    };
    console.log('New Ticket:', newTicket);

    this.ticketService.addTicket(newTicket);

    // Reset the form fields after submission
    this.ticketTitle.set('');
    this.ticketDescription.set('');
  }
}