import { Component } from "@angular/core";
import { DbContainerComponent } from "../shared/dbcontainer.component";

@Component({
  selector: 'db-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  standalone: true,
  imports: [
    DbContainerComponent,
  ],
})
export class TicketsComponent {}