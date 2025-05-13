import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
// import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  // standalone: true,
  // imports: [
  //   FormsModule,
  // ],
  encapsulation: ViewEncapsulation.None,
  host: {
    //prefrerred way to set class on host
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

  private inputElementRef =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  constructor() {
    console.log('ControlComponent constructor');
    afterRender(() => {
      console.log('ControlComponent afterRender');
    });

    afterNextRender(() => {
      console.log('ControlComponent afterNextRender');
    });
  }

  label = input.required<string>();
  private el = inject(ElementRef);

  ngAfterContentInit(): void {
    console.log('ControlComponent ngAfterContentInit');
    console.dir(this.inputElementRef()?.nativeElement);
  }

  onClick() {
    console.log('Control clicked!', this.el);
    console.dir(this.inputElementRef()?.nativeElement.value);
  }
}
