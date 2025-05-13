import { Component, computed, input } from "@angular/core";

@Component({
  selector: 'db-graph-bar',
  // standalone: true,
  templateUrl: './graphbar.component.html',
  styleUrls: ['./graphbar.component.css'],
  // imports: [],
})
export class GraphBarComponent {
  val = input.required<number>();
  max = input.required<number>();

  barheight = computed<string>(() => `${this.val() / this.max() * 100}%`);
}