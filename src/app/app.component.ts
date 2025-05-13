import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ServerStatusComponent } from "./components/serverstatus/serverstatus.component";
import { TicketsModule } from './components/tickets/tickets.module';
import { TrafficModule } from './components/traffic/traffic.module';
import { SharedModule } from './components/shared/shared.module';

import type { ImageObj } from './components/shared/dbcontainer.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficModule,
    TicketsModule,
    SharedModule,
  ],
})
export class AppComponent {
  statusIcon = signal<ImageObj>(
    {
      src: 'status.png',
      alt: 'A signal symbol',
    }
  );
  trafficIcon = signal<ImageObj>(
    {
      src: 'globe.png',
      alt: 'A globe',
    }
  );
  ticketsIcon = signal<ImageObj>(
    {
      src: 'list.png',
      alt: 'A list of items',
    }
  );
}
