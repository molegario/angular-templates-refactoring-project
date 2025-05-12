import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, contentChild, ElementRef, HostBinding, inject, input, ViewEncapsulation } from "@angular/core";
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
  host: { //prefrerred way to set class on host
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control'; //legacy - atlernative way to set class on host
  // @HostListing('click') onClick() { console.log('Control clicked!'); } //legacy - alternative way to set click event on host
  
  // inputTitle = contentChild.required<ElementRef<HTMLInputElement>>('titleInput');
  // inputDescription = contentChild.required<ElementRef<HTMLTextAreaElement>>('descriptionInput');

  // @ContentChild('titleInput') private inputTitle?: ElementRef<HTMLInputElement>;
  // @ContentChild('input') private inputElementRef?: ElementRef<HTMLTextAreaElement>;

  private inputElementRef = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  
  
  constructor() {
    console.log("ControlComponent constructor");
    afterRender(() => {
      console.log("ControlComponent afterRender");
      // console.dir(this.inputElementRef()?.nativeElement);
    });


    afterNextRender(() => {
      console.log("ControlComponent afterNextRender");
      // console.dir(this.inputElementRef()?.nativeElement);
    });




  }


  label = input.required<string>();

  private el = inject(ElementRef);


  ngAfterContentInit(): void {
    console.log("ControlComponent ngAfterContentInit");
    console.dir(this.inputElementRef()?.nativeElement);
  }


  onClick() {
    console.log('Control clicked!', this.el);
    // console.dir(this.inputTitle()?.nativeElement?.value);
    // console.dir(this.inputDescription()?.nativeElement?.value);
    // console.dir(this.inputTitle?.nativeElement?.value);
    console.dir(this.inputElementRef()?.nativeElement.value);
  }
}