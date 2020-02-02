import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  @Input() public isHome: boolean;
  @Input() public isSponsorship: boolean;
  @Input() public isInductees: boolean;
  @Input() public isGuidelines: boolean;
  @Input() public isContact: boolean;
  @Input() public isBanquet: boolean;
 }
