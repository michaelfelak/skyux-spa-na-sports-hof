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
      name: 'Kyle Smith',
      email: ''
    },
    {
      name: 'Lark Jones',
      email: ''
    },
    {
      name: 'Gerry Saggus',
      email: ''
    },
    {
      name: 'Al Lown',
      email: ''
    },
    {
      name: 'Mike Chavous',
      email: ''
    },
    {
      name: 'Verne Rushton',
      email: ''
    }
  ];

  constructor(private titleSvc: Title) { }

  public ngOnInit() {
    this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
  }
}
