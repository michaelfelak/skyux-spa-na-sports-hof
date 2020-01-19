import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  public nav = [
    {
      titleKey: 'app_nav_home',
      path: '/'
    },
    {
      titleKey: 'app_nav_inductees',
      path: '/inductees'
    },
    {
      titleKey: 'app_nav_guidelines',
      path: '/guidelines'
    },
    {
      titleKey: 'app_nav_banquet',
      path: '/banquet'
    },
    {
      titleKey: 'app_nav_sponsorship',
      path: '/sponsorship'
    },
    {
      titleKey: 'app_nav_contact',
      path: '/contact'
    }
  ];
}
