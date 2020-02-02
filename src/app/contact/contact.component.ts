import {
  Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public team: { name: string; email: string; }[] = [
    {
      name: 'Stan Godwin',
      email: ''
    },
    {
      name: 'Ned Baynham',
      email: ''
    },
    {
      name: 'Kyle Smith',
      email: ''
    },
    {
      name: 'Al Lown',
      email: ''
    },
    {
      name: 'Diane Shuler',
      email: ''
    },
    {
      name: 'Charlie Bush',
      email: ''
    }
  ];

  constructor(private titleSvc: Title) { }

  public ngOnInit() {
    this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
  }
}
