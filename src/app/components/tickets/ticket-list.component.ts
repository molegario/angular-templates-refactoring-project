import { Component, computed } from "@angular/core";
import { Ticket } from "./ticket.model";
import { TicketService } from "./ticket.service";

@Component({
  selector: 'db-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  standalone: true,
  imports: [],
})
export class TicketListComponent {

  constructor(private ticketService: TicketService) {}

  tickets = computed<Ticket[]>(() => this.ticketService.getAllTickets());



}
