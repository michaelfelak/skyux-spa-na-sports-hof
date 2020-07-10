import { Component, OnInit } from '@angular/core';
import { InducteeFlyoutContext } from './inductee-flyout.context';
import { SkyAppAssetsService } from '@skyux/assets';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
  public bioPresent: boolean;
  public slideIndex = 2;

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
      this.images.push(this.assetSvc.getUrl(record));
    }

    this.getBio().subscribe((result: any) => {
      this.p1 = result.p1;
      this.p2 = result.p2;
      this.p3 = result.p3;
      this.p4 = result.p4;
      this.p5 = result.p5;
      this.p6 = result.p6;
      this.p6 = result.p7;
      this.bioPresent = true;
    },
      (err: Error) => {
        this.bioPresent = false;
      });
  }

  public getBio(): Observable<any> {
    return this.http.get<any>(this.assetSvc.getUrl('bio/' + this.context.image + '.json'));
  }

  public plusDivs(n: number) {
    document.getElementsByClassName('initial')[0].setAttribute('style', 'display: none;');
    this.showDivs(this.slideIndex += n);
  }

  private showDivs(n: number) {
    let i;
    let x = document.getElementsByClassName('mySlides');
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x.item(i).setAttribute('style', 'display: none;');
    }
    x[this.slideIndex - 1].setAttribute('style', 'display: block;margin: 0 auto;');
  }
}
