import { Component } from '@angular/core';

import { IAccordionItem } from 'src/app/types';
import { accordionData } from 'src/app/data';

@Component({
  selector: 'app-documentation-components',
  templateUrl: './documentation-components.component.html',
  styleUrls: ['./documentation-components.component.scss']
})
export class DocumentationComponentsComponent {
  public accordionContent: IAccordionItem[] = accordionData;
  public progressBarValue: number = 75;
  public isCircularLoaderOn: boolean = false;

  turnOnLoader() {
    this.isCircularLoaderOn = true;
  }
}
