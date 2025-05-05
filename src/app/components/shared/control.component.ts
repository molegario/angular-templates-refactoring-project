import { Component, input, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-control",
  templateUrl: "./control.component.html",
  styleUrls: ["./control.component.scss"],
  standalone: true,
  imports: [
    FormsModule,
  ],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  label = input.required<string>();
}