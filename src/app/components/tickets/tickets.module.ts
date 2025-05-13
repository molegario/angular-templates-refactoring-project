import { NgModule } from "@angular/core";
import { NewTicketComponent } from "./new-ticket.component";
// import { FormsModule } from "@angular/forms";
// import { ButtonComponent } from "../shared/button.component";
// import { ControlComponent } from "../shared/control.component";
import { TicketListComponent } from "./ticket-list.component";
import { TicketItemComponent } from "./ticket-item.component";
import { TicketsComponent } from "./tickets.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    NewTicketComponent,
    TicketListComponent,
    TicketItemComponent,
    TicketsComponent,
  ],
  imports: [
    // FormsModule,
    // ButtonComponent,
    // ControlComponent,
    SharedModule,
  ],
  exports: [
    TicketsComponent,
  ],
  // providers: [],
  // bootstrap: []
})
export class TicketsModule {}