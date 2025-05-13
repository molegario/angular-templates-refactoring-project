import { Component, input, OnInit, signal } from "@angular/core";
import { Ticket } from "./ticket.model";
import { TicketService } from "./ticket.service";

@Component({
  selector: 'div[appTicketItem]',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css'],
  // standalone: true,
  // imports: [],
})
export class TicketItemComponent implements OnInit {

  ticket = input.required<Ticket>();

  showDetails = signal<boolean>(false);

  constructor(private ticketService: TicketService) {
    console.log("TicketItemComponent constructor");
  }

  toggleDetails() {
    this.showDetails.update((prev) => !prev);
  }

  onMarkDone() {
    this.ticketService.updateTicketById(this.ticket().id, {
      ...this.ticket(),
      status: 'closed'
    });
  }

  ngOnInit(): void {
    console.log("TicketItemComponent ngOnInit");
    console.dir(this.ticket());
  }
}