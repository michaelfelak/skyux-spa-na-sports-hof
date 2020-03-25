import {
  Component, OnInit, Input
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SkyAppAssetsService } from '@skyux/assets';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() public bannerImg: string;

  constructor(private assetSvc: SkyAppAssetsService,
    private titleSvc: Title) { }

  public ngOnInit() {
    this.titleSvc.setTitle('North Augusta Sports Hall of Fame');

    this.bannerImg = this.assetSvc.getUrl('img/banner.jpg');
  }
}
