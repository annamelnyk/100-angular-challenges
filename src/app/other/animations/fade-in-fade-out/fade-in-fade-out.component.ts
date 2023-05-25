import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-fade-in-fade-out',
  animations: [
    trigger('fadeInFadeOut', [
      state(
        'show',
        style({
          opacity: 1,
          marginTop: '15px',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          marginBottom: '-15px',
        })
      ),
      transition('show => hide', [animate('.5s')]),
      transition('hide => show', [animate('.5s')]),
    ]),
  ],
  templateUrl: './fade-in-fade-out.component.html',
  styleUrls: ['./fade-in-fade-out.component.scss'],
})
export class FadeInFadeOutComponent {
  @Input() public isShown: boolean = true;

  public toggle(): void {
    this.isShown = !this.isShown;
  }
}
