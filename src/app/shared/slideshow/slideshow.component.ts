import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'slide-show',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
  @Input() public imagePath: string;
  @Input() public images: string[];

  public slideIndex = 2;

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
