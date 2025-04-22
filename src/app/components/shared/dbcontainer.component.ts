import { Component, input } from "@angular/core";
import type { ImageObj } from "./dbcontainer.model";

@Component({
  selector: 'app-db-container',
  standalone: true,
  templateUrl: './dbcontainer.component.html',
  styleUrls: ['./dbcontainer.component.css'],
  imports: [
  ],
})
export class DbContainerComponent {
  image = input.required<ImageObj>();
  title = input.required<string>();
}