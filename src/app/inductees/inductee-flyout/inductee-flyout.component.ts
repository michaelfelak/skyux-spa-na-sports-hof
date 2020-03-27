import {
  Component, OnInit
} from '@angular/core';
import { InducteeFlyoutContext } from './inductee-flyout.context';
import { SkyAppAssetsService } from '@skyux/assets';

@Component({
  selector: 'app-inductee-flyout',
  templateUrl: './inductee-flyout.component.html',
  styleUrls: ['./inductee-flyout.component.scss']
})
export class InducteeFlyoutComponent implements OnInit {
  public imagePath: string;
  public images: string[];
  constructor(
    public context: InducteeFlyoutContext,
    private assetSvc: SkyAppAssetsService
  ) { }

  public ngOnInit() {
    console.log('flyout opened for id: ' + this.context.recordId);
    this.imagePath = this.assetSvc.getUrl('img/hof/' + this.context.image + '/profile.jpg');
  }
}
