import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[libClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Input() childElement!: HTMLDivElement; // child element to hide

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (!clickedInside) {
      if (this.childElement) {
        this.hideChildElement();
      } else {
        this.hideElement();
      }
    }
  }

  private hideChildElement() {
    if (this.childElement) {
      this.renderer.addClass(this.childElement, 'hidden');
    }
  }

  private hideElement() {
    this.renderer.addClass(this.el.nativeElement, 'hidden');
  }
}
