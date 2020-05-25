import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-howdy-name',
  template: `<h1>Hello {{name}}</h1>`
})
export class HowdyNameComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
