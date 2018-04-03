import { Directive, ElementRef, Renderer } from '@angular/core';
import { Content } from 'ionic-angular';

/**
 * Generated class for the HideHeaderFabDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header-fab]', // Attribute selector
  host: {
    '(ionScroll)': 'handleScroll($event)'
  }
})
export class HideHeaderFabDirective {

  private fabRef;
  private theaderRef;
  private scrollContentRef;
  private storedScroll: number = 0;
  private threshold: number = 10;

  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello HideHeaderFabDirective Directive');
  }

  ngAfterViewInit() {
    this.fabRef = this.element.nativeElement.getElementsByClassName("fab")[0];
    this.theaderRef = this.element.nativeElement.parentElement.getElementsByClassName("header")[0];
    this.scrollContentRef = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.fabRef, 'webkitTransition', 'transform 500ms,top 500ms');
    this.renderer.setElementStyle(this.theaderRef, 'webkitTransition', 'transform 500ms, top 500ms');
    this.renderer.setElementStyle(this.scrollContentRef, 'webkitTransition', 'transform 700ms, top 700ms');
  }

  handleScroll(event: Content) {
    if (event.scrollTop - this.storedScroll > this.threshold) {
      this.renderer.setElementStyle(this.theaderRef, 'top', '-65px');
      this.renderer.setElementStyle(this.scrollContentRef, 'margin-top', '0px');
      this.renderer.setElementStyle(this.fabRef, 'top', '60px');
      this.renderer.setElementStyle(this.fabRef, 'webkitTransform', 'scale3d(.1,.1,.1)');
    } else if (event.scrollTop - this.storedScroll < 0) {
      this.renderer.setElementStyle(this.theaderRef, 'top', '0px');
      this.renderer.setElementStyle(this.scrollContentRef, 'margin-top', '51px');
      this.renderer.setElementStyle(this.fabRef, 'top', '0');
      this.renderer.setElementStyle(this.fabRef, 'webkitTransform', 'scale3d(1,1,1)');
    }

    this.storedScroll = event.scrollTop;
  }
}
