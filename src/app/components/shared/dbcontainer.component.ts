import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-db-container',
  standalone: true,
  templateUrl: './dbcontainer.component.html',
  styleUrls: ['./dbcontainer.component.css'],
  imports: [
  ],
})
export class DbContainerComponent {
  @Input() imageSrc: string | undefined;
  @Input() imageAlt: string | undefined;
  @Input() title: string | undefined;
}