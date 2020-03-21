import { Component } from '@angular/core';

let inductees = require('../../assets/inductees.json');

@Component({
  selector: 'inductees-page',
  templateUrl: './inductees.component.html',
  styleUrls: ['./inductees.component.scss']
})

export class InducteesComponent {
  public inductees: any;
  constructor() {
    Object.assign(this.inductees, inductees.inductees);
  }
}
