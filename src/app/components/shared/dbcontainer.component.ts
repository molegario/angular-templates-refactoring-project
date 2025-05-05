import { Component, input, ViewEncapsulation } from "@angular/core";
import type { ImageObj } from "./dbcontainer.model";

@Component({
  selector: 'app-db-container',
  standalone: true,
  templateUrl: './dbcontainer.component.html',
  styleUrls: ['./dbcontainer.component.css'],
  imports: [],
  // encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-item',
  // },
})
export class DbContainerComponent {
  image = input.required<ImageObj>();
  title = input.required<string>();
}