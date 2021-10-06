import {Directive, ElementRef,Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[pmtAddClassList]'
})
export class AddClassListDirective implements OnInit{


  @Input('pmtAddClassList') classList: string = '';

  constructor(private _renderer: Renderer2, private  _el: ElementRef) {
  }
  ngOnInit() {
    let bar = this.classList.split(" ");
    bar.forEach(item => {
      this._renderer.addClass(this._el.nativeElement,item )
    })
  }
}
