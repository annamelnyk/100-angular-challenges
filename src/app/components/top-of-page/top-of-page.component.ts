import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent {
  public isElementShown: boolean = false;
  public offsetTop: number = 0;

  constructor(private scroller: ViewportScroller) {}

  @HostListener('window:scroll')
  onWindowScrolling() {
    const coordsY = this.scroller.getScrollPosition()[1];

    this.isElementShown = coordsY >= 400;
  }

  // alternative way without ViewportScroller

  // showTopOfThePageIcon() {
  //   this.offsetTop = document.documentElement.scrollTop;
  //   if (document.documentElement.scrollTop >= 400) {
  //     this.isElementShown = true;
  //   } else {
  //     this.isElementShown = false;
  //   }
  // }

  goToTheTop() {
    this.scroller.scrollToPosition([0, 0]);
    //this.scroller.scrollToAnchor('header');
  }
}
