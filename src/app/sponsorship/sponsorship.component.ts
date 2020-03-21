import {
  Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

let sponsors = require('./sponsors.json');

@Component({
  selector: 'sponsorship-page',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})

export class SponsorshipComponent implements OnInit {
  public sponsors: Sponsor[] = [];
  constructor(private titleSvc: Title) { }

  public ngOnInit() {
    this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
    Object.assign(this.sponsors, sponsors.sponsors);
  }
}
export class Sponsors {
  public sponsors: Sponsor[];
}

export class Sponsor {
  public id: string;
  public name: string;
  public image: string;
  public url: string;
}
