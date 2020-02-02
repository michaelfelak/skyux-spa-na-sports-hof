import {
  Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'sponsorship-page',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})
export class SponsorshipComponent implements OnInit {

  constructor(private titleSvc: Title) { }

  public ngOnInit() {
    this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
  }
}
