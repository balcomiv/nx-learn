import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[nxSeedHelloWorld]'
})
export class HelloWorldDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    console.log(`===> `, this.elementRef);
    this.elementRef.nativeElement.style.border = '2px dashed green';

    const el = this.elementRef.nativeElement as HTMLDivElement;
    el.innerHTML = 'Hello, Lyle!';
  }
}
