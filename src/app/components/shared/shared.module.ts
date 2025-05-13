import { NgModule } from "@angular/core";
import { DbContainerComponent } from "./dbcontainer.component";
import { FormsModule } from "@angular/forms";
import { ControlComponent } from "./control.component";
import { ButtonComponent } from "./button.component";



@NgModule({
  declarations: [
    // Add your components here
    DbContainerComponent,
    ControlComponent,
    ButtonComponent,
  ],
  imports: [
    // Add your modules here
    FormsModule,
  ],
  exports: [
    // Export your components here
    DbContainerComponent,
    ControlComponent,
    ButtonComponent,
    FormsModule,
  ],
  // providers: [],
  // bootstrap: []
})
export class SharedModule {}