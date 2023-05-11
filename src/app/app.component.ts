import { Component } from '@angular/core';

import { IAccordionItem } from './types';
import { accordionData } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public toolbarLinks: string[] = [
    'Components',
    'Directives',
    'Services',
    'Pipes',
    'Other',
  ];

  public accordionContent: IAccordionItem[] = accordionData;
}
