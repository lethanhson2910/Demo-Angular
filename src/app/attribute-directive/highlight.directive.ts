import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "yellow";
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'green');
  }

  @HostBinding('style.backgroundColor') bgColor: string = "red";

  @HostListener('mouseenter')SukienHover(eventData: Event){
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'blue');
  }
  
  @HostListener('mouseleave')SukienLeave(eventData: Event){
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
  }


}
