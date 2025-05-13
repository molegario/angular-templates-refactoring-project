import { AfterViewInit, Component, ElementRef, OnInit, signal, viewChild } from "@angular/core";
import type { Ticket } from "./ticket.model";
import { TicketService } from "./ticket.service";

@Component({
  selector: 'new-ticket-form',
  // standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
  // imports: [FormsModule, ButtonComponent, ControlComponent],
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  ticketTitle = signal<string>('');
  ticketDescription = signal<string>('');

  // @ViewChild('newTicketForm') private ticketForm?: ElementRef<HTMLFormElement>;
  private ticketForm = viewChild.required<ElementRef<HTMLFormElement>>('newTicketForm');


  ngAfterViewInit(): void {
    console.log("NewTicketComponent ngAfterViewInit");
    console.log(this.ticketForm()?.nativeElement);
  }

  ngOnInit(): void {
    console.log("NewTicketComponent ngOnInit");
    console.log(this.ticketForm()?.nativeElement);
    // this.ticketForm.nativeElement.addEventListener('submit', (event) => {
    //   event.preventDefault();
    //   console.log('Form submitted');
    // });
  }




  constructor(private ticketService: TicketService) {}

  onTicketSubmit(titleInput: string, descriptionInput: string) {
    // if (!this.ticketTitle() || !this.ticketDescription()) {
    //   return;
    // }
    console.log('inputs::');
    console.dir(titleInput);
    console.dir(descriptionInput);

    // if(!titleInput.value || !descriptionInput.value) {
    //   return;
    // }
    if (!titleInput || !descriptionInput) {
      return;
    }

    const newTicket: Ticket = {
      id: Math.random().toString(36).substr(2, 9),
      // title: this.ticketTitle(),
      // title: titleInput.value,
      title: titleInput,
      // description: this.ticketDescription(),
      // description: descriptionInput.value,
      description: descriptionInput,
      status: 'open',
    };

    console.log('New Ticket:', newTicket);

    this.ticketService.addTicket(newTicket);

    // Reset the form fields after submission
    // this.ticketTitle.set('');
    // this.ticketDescription.set('');
    // titleInput.value = '';
    // descriptionInput.value = '';
    this.ticketForm().nativeElement.reset(); // Reset the form using the template reference variable
  }
}