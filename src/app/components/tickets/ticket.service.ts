import { Injectable, signal } from "@angular/core";
import { Ticket } from "./ticket.model";

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private Tickets = signal<Ticket[]>([]);

  getAllTickets(): Ticket[] {
    return [...this.Tickets()];
  }

  addTicket(ticket: Ticket): void {
    this.Tickets.update((tickets) => [...tickets, ticket]);
  }
}