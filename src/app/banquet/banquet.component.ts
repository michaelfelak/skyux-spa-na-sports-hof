import {
  Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'banquet-page',
  templateUrl: './banquet.component.html',
  styleUrls: ['./banquet.component.scss']
})
export class BanquetComponent implements OnInit {

  constructor(private titleSvc: Title) { }

  public ngOnInit() {
    this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
  }
}
