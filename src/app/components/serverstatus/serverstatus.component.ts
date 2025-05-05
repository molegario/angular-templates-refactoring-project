import { Component, signal } from "@angular/core";
// import { DbContainerComponent } from "../shared/dbcontainer.component";
// import type { ImageObj } from "../shared/dbcontainer.model";

@Component({
  selector: 'db-server-status',
  standalone: true,
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.css'],
  // imports: [DbContainerComponent],
})
export class ServerStatusComponent {
  currentStatus = signal<string>('online');
  // headerImg = signal<ImageObj>({
  //   src: 'status.png',
  //   alt: 'A signal symbol',
  // });
}