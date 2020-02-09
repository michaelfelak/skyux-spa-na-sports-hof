import {
  Component, OnInit, Input
} from '@angular/core';
import { SkyAppAssetsService } from '@skyux/assets';

@Component({
  selector: 'sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss']
})
export class SponsorCardComponent implements OnInit {
  public imagePath: string;
  @Input() public image: string;
  @Input() public name: string;
  @Input() public url: string;

  constructor(
    private assetSvc: SkyAppAssetsService
  ) { }
  public ngOnInit() {
    this.imagePath = this.assetSvc.getUrl('sponsors/' + this.image);
  }
}
