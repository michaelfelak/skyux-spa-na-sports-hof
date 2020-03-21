import { Component, OnInit } from '@angular/core';
let inductees = require('./inductees.json');

@Component({
  selector: 'inductees-page',
  templateUrl: './inductees.component.html',
  styleUrls: ['./inductees.component.scss']
})

export class InducteesComponent implements OnInit {
  public inductees: any;

  public ngOnInit() {
    this.inductees = inductees.inductees;
  }
}
