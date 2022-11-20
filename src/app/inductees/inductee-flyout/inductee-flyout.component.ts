import { Component, OnInit } from '@angular/core';
import { InducteeFlyoutContext } from './inductee-flyout.context';
import { SkyAppAssetsService } from '@skyux/assets';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inductee-flyout',
  templateUrl: './inductee-flyout.component.html',
  styleUrls: ['./inductee-flyout.component.scss']
})
export class InducteeFlyoutComponent implements OnInit {
  public imagePath: string;
  public images: string[] = [];
  public p1: string;
  public p2: string;
  public p3: string;
  public p4: string;
  public p5: string;
  public p6: string;
  public p7: string;
  public p8: string;
  public bioPresent: boolean;

  constructor(
    public context: InducteeFlyoutContext,
    private assetSvc: SkyAppAssetsService,
    private http: HttpClient
  ) { }

  public ngOnInit() {
    this.imagePath = this.assetSvc.getUrl(
      'img/hof/' + this.context.image + '/profile.jpg'
    );

    for (let record of this.context.images) {
      if (!record.includes('profile.jpg')) {
        this.images.push(this.assetSvc.getUrl(record));
      }
    }
    console.log(this.images);
    this.getBio().subscribe((result: any) => {
      this.p1 = result.p1;
      this.p2 = result.p2;
      this.p3 = result.p3;
      this.p4 = result.p4;
      this.p5 = result.p5;
      this.p6 = result.p6;
      this.p7 = result.p7;
      this.p8 = result.p8;
      this.bioPresent = true;
    },
      (err: Error) => {
        this.bioPresent = false;
      });
  }

  public getBio(): Observable<any> {
    return this.http.get<any>(this.assetSvc.getUrl('bio/' + this.context.image + '.json'));
  }
}
