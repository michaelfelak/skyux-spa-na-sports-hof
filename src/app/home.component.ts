import {
  Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleSvc: Title) { }

  public ngOnInit() {
    this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
  }
}
