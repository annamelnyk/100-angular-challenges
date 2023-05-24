import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  @Input() public appRippleClass: string = 'ripple';

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter')
  public onMouseEnterHandler(event: MouseEvent): void {
    this.renderer.addClass(this.element.nativeElement, this.appRippleClass)
  }
}
