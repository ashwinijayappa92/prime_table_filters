import {Renderer2, ElementRef, OnInit, Directive} from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})

export class RendererDirective implements OnInit {
  constructor( private renderer: Renderer2, private el: ElementRef){

  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'bgColor');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', 'true');
  }
}
