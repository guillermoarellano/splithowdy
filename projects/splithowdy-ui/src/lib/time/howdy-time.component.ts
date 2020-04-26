import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'lib-howdy-time',
  template: `<h1>Hello today is the {{time}}</h1>`
})
export class HowdyTimeComponent implements OnInit {
  time: string;

  constructor() { }

  ngOnInit(): void {
    this.time = moment().format('DD.MM.YYYY');
  }

}
