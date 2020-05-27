import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[nxSeedHelloWorld]'
})
export class HelloWorldDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this.elementRef);
  }
}
