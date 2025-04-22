import { Component } from "@angular/core";
import { DbContainerComponent } from "../shared/dbcontainer.component";

@Component({
  selector: 'db-server-status',
  standalone: true,
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.css'],
  imports: [DbContainerComponent],
})
export class ServerStatusComponent {
  currentStatus = 'online';
}