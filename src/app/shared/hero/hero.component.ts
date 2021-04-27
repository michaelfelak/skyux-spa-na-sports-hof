import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'hero-image',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {
  @Input() public image: string;
  @Input() public text: string;
}
