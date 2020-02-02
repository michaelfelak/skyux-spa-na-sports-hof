import {
  Component, OnInit
} from '@angular/core';
import { SkyAppAssetsService } from '@skyux/assets';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private assetSvc: SkyAppAssetsService) { }

  public ngOnInit() {
  }
}
