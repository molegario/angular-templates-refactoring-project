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

  updateTicketById(id: string, updatedTicket: Ticket): void {
    this.Tickets.update((tickets) => {
      const ticketIndex = tickets.findIndex((ticket) => ticket.id === id);
      if (ticketIndex !== -1) {
        tickets[ticketIndex] = { ...tickets[ticketIndex], ...updatedTicket };
      }
      return [...tickets];
    });
  }
}