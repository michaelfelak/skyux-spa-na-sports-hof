import {
  Component, Input, OnInit
} from '@angular/core';

import { SkyAppAssetsService } from '@skyux/assets';

@Component({
  selector: 'inductee-card',
  templateUrl: './inductee-card.component.html',
  styleUrls: ['./inductee-card.component.scss']
})

export class InducteeCardComponent implements OnInit {
  @Input() public id: string;
  @Input() public name: string;
  @Input() public image: string;
  @Input() public bio: string;
  public imagePath: string;

  constructor(private assetSvc: SkyAppAssetsService) { }

  public ngOnInit() {
    this.imagePath = this.assetSvc.getUrl('img/' + this.image);
    console.log(this.imagePath);
  }

  public selectBio() {
    console.log('bio selected for id ' + this.id);
  }
}
