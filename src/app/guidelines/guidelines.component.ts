import {
  Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'guidelines-page',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {

  constructor(private titleSvc: Title) { }

  public ngOnInit() {
    this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
  }
}
