import { Component, computed, signal } from "@angular/core";
// import { DbContainerComponent } from "../shared/dbcontainer.component";
import type { TrafficDataPoint } from "./traffic.model";
// import type { ImageObj } from "../shared/dbcontainer.model";



@Component({
  selector: 'db-traffic',
  // standalone: true,
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css'],
  // imports: [DbContainerComponent],
})
export class TrafficComponent {
  dummyTrafficData = signal<TrafficDataPoint[]>([
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ]);
  maxTraffic = computed<number>(() =>
    Math.max(...this.dummyTrafficData().map((data) => data.value))
  );
  // headerImg = signal<ImageObj>({
  //   src: 'globe.png',
  //   alt: 'A globe',
  // });
}