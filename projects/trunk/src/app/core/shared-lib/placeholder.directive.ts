import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[addHost]'
})
export class PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
