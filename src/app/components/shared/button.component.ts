import { Component, ViewEncapsulation } from "@angular/core";


@Component({
  selector: "button[appButton]",
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
  // encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {}