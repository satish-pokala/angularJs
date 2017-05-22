import {Directive, ElementRef, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHidePipesDiv]'
})
export class HidePipesDivDirective {


  constructor(private el:ElementRef,private renderer:Renderer2) {

    this.renderer.setStyle(el.nativeElement,'display','none');
  }

}
