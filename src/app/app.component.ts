import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ServerStatusComponent } from "./components/serverstatus/serverstatus.component";
import { TrafficComponent } from "./components/traffic/traffic.component";
import { TicketsComponent } from "./components/tickets/tickets.component";
import { DbContainerComponent } from "./components/shared/dbcontainer.component";
import { ImageObj } from './components/shared/dbcontainer.model';
import { TicketsModule } from './components/tickets/tickets.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    // TicketsComponent,
    TicketsModule,
    DbContainerComponent
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
  )
  ticketsIcon = signal<ImageObj>(
    {
      src: 'list.png',
      alt: 'A list of items',
    }
  )
  // dummyTrafficData = [
  //   {
  //     id: 'd1',
  //     value: 433,
  //   },
  //   {
  //     id: 'd2',
  //     value: 260,
  //   },
  //   {
  //     id: 'd3',
  //     value: 290,
  //   },
  //   {
  //     id: 'd4',
  //     value: 410,
  //   },
  //   {
  //     id: 'd5',
  //     value: 397,
  //   },
  //   {
  //     id: 'd6',
  //     value: 488,
  //   },
  //   {
  //     id: 'd47',
  //     value: 589,
  //   },
  // ];
  // maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  // currentStatus = 'online';
}
