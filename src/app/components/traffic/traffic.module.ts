import { NgModule } from "@angular/core";
import { GraphBarComponent } from "./graphbar.component";
import { TrafficComponent } from "./traffic.component";



@NgModule({
  declarations: [
    // Add your components here
    GraphBarComponent,
    TrafficComponent,
  ],
  imports: [
    // Add your modules here
  ],
  exports: [
    // Export your components here
    TrafficComponent,
  ],
  // providers: [],
  // bootstrap: []
})
export class TrafficModule {}