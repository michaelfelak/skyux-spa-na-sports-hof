import {
  Component
} from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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
}
