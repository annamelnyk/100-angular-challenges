import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const fadeInAnimation = animation([
  style({
    opacity: 0,
    height: 0,
  }),
  animate('{{time}}')
]);

export const fadeOutAnimation = animation([
  style({
    opacity: 1,
    height: '100%',
  }),
  animate('{{time}}')
]);