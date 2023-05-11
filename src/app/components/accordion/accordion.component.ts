import { Component, Input } from '@angular/core';
//import { map } from 'rxjs/operators';

import { IAccordionItem } from 'src/app/types';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() accordionContent: IAccordionItem[] = [];

  onToggleAccordion(item: IAccordionItem): void {
    console.log(item);
    item.isExpanded = !item.isExpanded;
  }
}
