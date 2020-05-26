import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-seed-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RootComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
