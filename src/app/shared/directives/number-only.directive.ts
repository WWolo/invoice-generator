import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true,
})
export class NumberOnlyDirective {
  private el = inject(ElementRef);

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
